import * as Store from '@elumeo/jfs-core/build/Store';
import epic from './Epic';
import reducer from './Reducer';
export default Store.create(epic, reducer);
