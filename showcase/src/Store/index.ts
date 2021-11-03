import * as Store from '@elumeo/jfs-core/build/Store';
import epic from './Epic';
import reducer from './Reducer';
import { history } from '@elumeo/jfs-core/build/Store/Middleware';
export default Store.create(epic, reducer(history));
