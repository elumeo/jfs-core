import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { registerConfigDispatchHandler, clientInstance } from '../base/Client';
import { configLoadedAction } from './action/ConfigAction';

// noinspection JSUnusedGlobalSymbols
export default (rootEpic, rootReducer) => {
  const epicMiddleware = createEpicMiddleware();
  // create and set store
  const store = composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )(createStore)(rootReducer);

  if (module['hot']) {
    module['hot'].accept('../../../../../src/store/reducer/Root.ts', () => {
      store.replaceReducer(require('../../../../../src/store/reducer/Root.ts'));
    });
  }
  epicMiddleware.run(rootEpic);

  registerConfigDispatchHandler(
    config => {
      store.dispatch(configLoadedAction(config));
    }
  );
  clientInstance(() => console.debug("client initialized -> config load triggered"));
  return store;
};
