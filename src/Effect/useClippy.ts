import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import ClippyLoaderService from 'API/CLIPPY/ClippyLoader.service';
import { pickClippyVariant } from 'Store/Selector/Core/LocalStorage.selector';
import { pickUsername } from 'Store/Selector/Core/Session';
import { Agent } from 'Types/Clippy.type';
import { useSelector } from 'Types/Redux';
import { type Agent as ClippyAgent } from 'clippyts';
import { AgentType } from 'clippyts/dist/types';
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

export type ClippyVariant = Agent
const useClippy = () => {
  const [agent, setAgent] = useState<ClippyAgent>(null)
  const clippyVariant = useSelector(pickClippyVariant)

  const hide = useCallback(() => {
    if (agent) {
      agent?.hide(false, () => { return });
    }
  }, [agent])
  const clippyloader = useMemo(async () => await ClippyLoaderService(clippyVariant), [clippyVariant])

  useEffect(() => {
    // if (clippyVariant) {
    clippyloader.then(agent => {
      setAgent(agent)
      console.log('hello clippy', { clippyVariant, agent, })
    }).catch(() => setAgent(null))

    return () => {
      console.log('bye clippy')
      hide()
    };
  }, [clippyloader])

  useLayoutEffect(() => {
    const clippyDoms = document.querySelectorAll('.clippy');
    if (agent) {
      if (clippyDoms.length) {
        clippyDoms.forEach(clippyDom => {
          clippyDom.addEventListener('contextmenu', e => { e.preventDefault(); hide() });
        })
      }
    }
    return () => {
      clippyDoms.forEach(clippyDom => {
        clippyDom.removeEventListener('contextmenu', e => { e.preventDefault(); hide() });
      })
    }
  }, [agent, hide])
  //useMemo(() => 
  return ({ variant: clippyVariant as ClippyVariant, agent: agent })
  // , [clippyVariant, agent])
}

export default useClippy
