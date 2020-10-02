import createStore from 'Core/Store';
import rootEpic from './Epic';
import rootReducer from './Reducer';

const Store = createStore(rootEpic, rootReducer);

export default Store;
