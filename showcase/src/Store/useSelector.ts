import createUseSelector from '@elumeo/jfs-core/build/Store/createUseSelector';
import { State } from 'Store/Reducer';

const useSelector = createUseSelector<State>();

export default useSelector;