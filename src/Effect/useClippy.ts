import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import ClippyLoaderService from 'Component/Clippy/ClippyLoader.service';
import { Agent } from 'Types/Clippy.type';
import { useSelector } from 'Types/Redux';
import { type Agent as ClippyAgent } from 'clippyts';
import { AgentType } from 'clippyts/dist/types';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type ClippyVariant = Agent
const useClippy = () => {
  const [agent, setAgent] = useState<ClippyAgent>(null)
  const userId = useSelector(state => state.Core.Session?.sessionDTO?.username ?? '')
  const clippyVariant = useSelector(state =>
    state
      .Core
      .LocalStorage
    ?.[
    [userId, UserConfig.clippyFeature].join(UserConfig.SEPERATOR) as ClippyVariant] ?? 'Clippy')

  const hide = useCallback(() => {
    if (agent) {
      agent?.hide(false, () => { return });
    }
  }, [agent, setAgent])
  const clippyloader = useMemo(() => ClippyLoaderService(clippyVariant), [clippyVariant])

  useEffect(() => {

    // if (clippyVariant) {
    clippyloader.then(setAgent).catch(() => setAgent(null))
    // ClippyLoaderService(clippyVariant).then(setAgent).catch(() => setAgent(null))

    // console.log('loading clippy')
    // clippy.load({
    //   name: clippyVariant,
    //   successCb: setAgent,
    //   failCb: (error) => {
    //     console.log(error)
    //     setAgent(null);
    //   },
    //   selector: 'clippy',
    // })
    // }
    // else if (clippy.agents?.[clippyVariant as AgentType]) {
    //   clippy.agents?.[clippyVariant as AgentType].show(true, );
    // }
    return () => {
      console.log('bye clippy')
      hide()
    };
  }, [clippyloader, hide])

  useEffect(() => {
    const clippyDom = document.querySelector('.clippy');
    // const stopCb = () => {
    //   console.log('stopping?');
    //   agent.closeBalloon();
    // }
    if (agent) {
      if (clippyDom) {
        console.log('adding?');
        clippyDom.addEventListener('contextmenu', e => { e.preventDefault(); hide() });
      }
    }
    return () => {
      console.log('removing?');
      clippyDom?.removeEventListener('contextmenu', e => { e.preventDefault(); hide() });
    }
  }, [agent, hide])
  return useMemo(() => ({ variant: clippyVariant as ClippyVariant, agent: agent }), [clippyVariant, agent])
}

export default useClippy
