import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

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

  return store;
};
