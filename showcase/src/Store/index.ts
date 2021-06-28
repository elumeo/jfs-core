import * as Store from '@elumeo/jfs-core/build/Store';
import epic from './Epic';
import reducer from './Reducer';
import { history } from 'Core/Store/Middleware';
export default Store.create(epic, reducer(history));
