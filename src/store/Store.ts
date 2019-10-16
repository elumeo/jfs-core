import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { registerConfigDispatchHandler } from '../base/Client';
import { configLoadedAction } from '../store/action/ConfigAction';

// -----------------------------------------------------------------------------

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
  return store;
};
