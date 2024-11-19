import { createSelector } from 'reselect';
import { Core } from './Core'

export const Configuration = createSelector(
  Core,
  core => core.Configuration.config,
);
export const DebugMode = createSelector(
  Configuration,
  config => config?.DebugMode
)

export const DebugCallstackLimit = createSelector(
  Configuration,
  config => config?.DebugCallstackLimit
)


export const pickClippyConfig = createSelector(
  Configuration,
  config => config?.ClippyConfig ?? {}
)
