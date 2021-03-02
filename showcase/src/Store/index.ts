import createStore from '@elumeo/jfs-core/build/Store';
import rootEpic from './Epic';
import rootReducer from './Reducer';

const Store = createStore(rootEpic, rootReducer);

export default Store;
