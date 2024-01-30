import { createSelector } from 'reselect';
import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import { Core } from './Core';
import { pickUsername } from './Session';
import { Agent } from 'Types/Clippy.type';


export const pickState = createSelector(Core, core => core.LocalStorage);
export const pickClippyVariant = createSelector([pickState, pickUsername], (storage, userId) =>
    storage?.[
    [userId, UserConfig.clippyFeature].join(UserConfig.SEPERATOR) as Agent
    ] ?? 'Clippy')
