import { createSelector } from '@reduxjs/toolkit';
import * as Config from './Configuration'
import * as LocalStorage from './LocalStorage.selector'
import { pickUsername } from './Session';
import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import { Agent } from 'Types/Clippy.type';

export const pickClippyEnabled = createSelector(
    Config.pickClippyConfig,
    config => config?.enabled
)

export const pickPreferredClippyVariant = createSelector(
    [LocalStorage.pickState, pickUsername],
    (storage, userId) => {
        const key = [userId, UserConfig.clippyFeature].join(UserConfig.SEPERATOR)
        return (storage[key]) as Agent ?? Agent.Clippy
    }
)
export const pickClippyConfigInterval = createSelector(
    Config.pickClippyConfig,
    config => config?.interval
)
export const pickClippyConfigMessages = createSelector(
    Config.pickClippyConfig,
    config => config?.messages
)