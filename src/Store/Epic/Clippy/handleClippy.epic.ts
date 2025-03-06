import * as UserConfig from "API/LOCAL_STORAGE/UserConfig";
import { clippySay, clippyAnimate, clippySaveAgent, clippyInit, clippyInitialized, clippyDestroy, authorizeSession, clippySayQueue } from "Store/Action";
import * as Selector from "Store/Selector/Core";
import { Epic } from "Types/Redux";
import { concatMap, EMPTY, filter, fromEvent, map, switchMap, take, takeUntil, tap, timer } from "rxjs";
import { isActionOf } from "typesafe-actions";
import ClippyLoaderService from "API/CLIPPY/ClippyLoader.service";
import { combineEpics } from "redux-observable";
import { Agent, ClippyAgent, isValidAgent } from "Types/Clippy.type";

const agent: { instance: ClippyAgent | null; type: Agent | null } = {
  instance: null,
  type: null,
};
const listenContextMenu: Epic = (action$, state$) =>
  state$.pipe(
    switchMap(() =>
      fromEvent(document, "contextmenu").pipe(
        filter((e) => e.target instanceof HTMLElement && (e.target as HTMLElement).classList?.contains?.("clippy")),
        tap((e) => e.stopImmediatePropagation()),
        tap((e) => e.preventDefault()),
        switchMap(() => [clippyDestroy()])
      )
    )
  );

const init: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(authorizeSession)),
    filter(() => Selector.ClippyConfig.pickClippyEnabled(state$.value)),
    filter(() => agent.instance == null),
    filter(() => Selector.ClippyConfig.pickClippyConfigMessages(state$.value).length > 0),
    filter(({ payload }) => !!payload.frontendSessionDTO?.session),
    map(({ payload }) => {
      const userName = payload.frontendSessionDTO?.session?.username;
      const preferred = Selector.LocalStorage.pickState(state$.value)?.[[userName, UserConfig.clippyFeature].join(UserConfig.SEPERATOR)];
      return preferred;
    }),
    switchMap((variant) => {
      // Ensure we have a valid agent type
      const agentType = isValidAgent(variant) ? variant : Agent.Clippy;
      return [clippyInit(agentType)];
    }),
    takeUntil(action$.pipe(filter(isActionOf(clippyInit))))
  );

const handleLoader: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf([clippyInit, clippySaveAgent])),
    filter(() => Selector.ClippyConfig.pickClippyEnabled(state$.value)),
    map(({ payload }) => payload),
    switchMap(async (variant) => {
      // Ensure we have a valid agent type
      if (!variant || !isValidAgent(variant)) {
        return [clippyInit(Agent.Clippy)];
      }
      if (agent.instance !== null && agent.type !== variant) {
        return [clippyInit(variant), clippyDestroy()];
      }
      agent.instance = await ClippyLoaderService(variant);
      agent.type = variant;
      agent.instance.show(false);
      return [clippyInitialized(variant)];
    }),
    switchMap((action) => action)
  );

const handleSay: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(clippySay)),
    filter(() => Selector.ClippyConfig.pickClippyEnabled(state$.value)),
    concatMap(async ({ payload, meta }) => {
      if (agent.instance) {
        agent.instance.speak(payload, false);
        return [clippyAnimate(meta ?? null)];
      } else {
        const variant = Selector.ClippyConfig.pickPreferredClippyVariant(state$.value);
        if (isValidAgent(variant)) {
          agent.instance = await ClippyLoaderService(variant);
          agent.instance.show(false);
          agent.instance.speak(payload, false);
          agent.type = variant;
          return [clippyAnimate(meta ?? null)];
        }
        return [];
      }
    }),
    switchMap((action) => action)
  );
const handleSayQueue: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(clippySayQueue)),
    switchMap(({ payload: messages, meta: interval }) =>
      timer(0, interval ?? Selector.ClippyConfig.pickClippyConfigInterval(state$.value)).pipe(
        concatMap((index) => [clippySay(messages[index])]),
        take(messages.length)
      )
    )
  );
const handleAnimation: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(clippyAnimate)),
    map(({ payload }) => payload),
    concatMap((animation) => {
      if (agent.instance) {
        animation ? agent.instance.play(animation) : agent.instance.animate();
      }
      return EMPTY;
    })
  );

const handleDestroy: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(clippyDestroy)),
    map(() => {
      if (agent.instance !== null) {
        agent.instance.stopCurrent();
        agent.instance.hide(false, () => {
          return;
        });
        agent.instance = null;
        agent.type = null;
      }
      Array.from(document.querySelectorAll(".clippy,.clippy-balloon")).map((el) => el.remove());
    }),
    switchMap(() => EMPTY)
  );
export default combineEpics(listenContextMenu, init, handleLoader, handleSay, handleDestroy, handleAnimation, handleSayQueue);
