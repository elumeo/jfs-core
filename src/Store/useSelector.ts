import createUseSelector from './createUseSelector';
import { State } from './Reducer/Global';

const useSelector = createUseSelector<State>();

export default useSelector;
