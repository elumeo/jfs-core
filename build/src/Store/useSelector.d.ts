import { State } from './Reducer/Global';
declare const useSelector: <R>(selector: (state: State) => R) => R;
export default useSelector;
