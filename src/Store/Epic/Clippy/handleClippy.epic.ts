import { clippySay, clippyAnimate, clippySaveAgent, clippyInit, clippyInitialized, clippyDestroy } from 'Store/Action';
import * as Selector from 'Store/Selector/Core';
import { Epic } from 'Types/Redux';
import { concatMap, filter, fromEvent, map, switchMap, tap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import ClippyLoaderService from 'API/CLIPPY/ClippyLoader.service';
import { combineEpics } from 'redux-observable';
import { Agent, } from 'clippyts';
import { AgentType } from 'clippyts/dist/types';

const agent: { instance: Agent | null, type: AgentType } = {
  instance: null,
  type: null
}
const listenContextMenu: Epic = (action$, state$) =>
  state$.pipe(
    switchMap(() =>
      fromEvent(document, 'contextmenu')
        .pipe(
          filter(e => e.target instanceof HTMLElement && (e.target as HTMLElement).classList.contains('clippy')),
          tap(e => e.preventDefault()),
          tap(e => e.stopImmediatePropagation()),
          switchMap(() => [clippyDestroy()])
        )
    )
  )

const init: Epic = (_action$, state$) =>
  state$.pipe(
    filter(() => Selector.ClippyConfig.pickClippyEnabled(state$.value)),
    filter(() => !!Selector.ClippyConfig.pickClippyVariant(state$.value)),
    filter(() => !agent.instance),
    switchMap(() => [clippyInit(Selector.ClippyConfig.pickClippyVariant(state$.value))]),
  )

const handleLoader: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf([clippyInit, clippySaveAgent])),
    map((action) =>
      (action as ReturnType<typeof clippySaveAgent>).payload ?? Selector.ClippyConfig.pickClippyVariant(state$.value),

    ),
    map(async (variant) => {
      if (agent?.instance?.stop && agent.type !== variant) {
        return [clippyDestroy()]
      }
      agent.instance = await ClippyLoaderService(variant) as Agent
      agent.type = variant
      return []
    }),
    switchMap(() => {
      return [clippyInitialized(agent.type)]
    }
    ),

  )

const handleSay: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(clippySay)),
    concatMap(({ payload, meta }) => {
      if (agent.instance) {
        agent.instance.show(false)
        agent.instance.speak(payload, false)
        return [clippyAnimate(meta ?? null)]
      } else {
        return [clippyInit(Selector.ClippyConfig.pickClippyVariant(state$.value))]
      }
    }),
  )
const handleAnimation: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(clippyAnimate)),
    map(({ payload }) => payload),
    concatMap((animation) => {
      if (agent.instance) {
        animation ? agent.instance.play(animation) : agent.instance.animate()
      }
      return []
    }),
  )

const handleDestroy: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(clippyDestroy)),
    map(() => {
      if (agent?.instance?.stop) {
        agent.instance.stopCurrent();
        agent.instance.hide(false, () => { return })
        agent.instance = null;
        agent.type = null
      }
      Array.from(document.querySelectorAll('.clippy')).map(el => el.remove())
    }),
    switchMap(() => [clippyInit(Selector.ClippyConfig.pickClippyVariant(state$.value))])
  )
export default combineEpics(listenContextMenu, init, handleLoader, handleSay, handleDestroy, handleAnimation);


