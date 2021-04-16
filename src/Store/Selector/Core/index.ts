import { createSelector } from 'reselect';
import { State } from 'Store/Reducer/Global';

export const app = createSelector(
  (state: State) => state.Core,
  state => state.App,
);

export const configuration = createSelector(
  (state: State) => state.Core,
  state => state.Configuration
);

export const language = createSelector(
  (state: State) => state.Core,
  state => state.Language
);

export const locale = createSelector(
  (state: State) => state.Core,
  state => state.Locale,
);

export const login = createSelector(
  (state: State) => state.Core,
  state => state.Login,
);

export const logout = createSelector(
  (state: State) => state.Core,
  state => state.Logout,
);

export const navigation = createSelector(
  (state: State) => state.Core,
  state => state.Navigation,
);

export const notification = createSelector(
  (state: State) => state.Core,
  state => state.Notification,
);

export const router = createSelector(
  (state: State) => state.Core,
  state => state.Router,
);

export const session = createSelector(
  (state: State) => state.Core,
  state => state.Session,
);

export const settings = createSelector(
  (state: State) => state.Core,
  state => state.Settings,
);

export const system = createSelector(
  (state: State) => state.Core,
  state => state.System,
);

export const toast = createSelector(
  (state: State) => state.Core,
  state => state.Toast,
);

export const webSocket = createSelector(
  (state: State) => state.Core,
  state => state.WebSocket,
);

export * from './App';