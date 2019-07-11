import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from '../../../../src/store/epic/Root';
import rootReducer from '../../../../src/store/reducer/Root';

// -----------------------------------------------------------------------------

export default () => {
  const epicMiddleware = createEpicMiddleware();
  // create and set store
  const store = composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )(createStore)(rootReducer);

  if (module['hot']) {
    module['hot'].accept('../../../../src/store/reducer/Root.ts', () => {
      store.replaceReducer(require('../../../../src/store/reducer/Root.ts'));
    });
  }

  epicMiddleware.run(rootEpic);
  return store;
};
