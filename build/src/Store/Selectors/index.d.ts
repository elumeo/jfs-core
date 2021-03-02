import Core from '../../../Store/Reducer/Core';
import Global from '../../../Store/Reducer/Global';
declare const getCoreStateSelector: import("reselect").OutputSelector<Global.State, Core.State, (res: any) => Core.State>;
export default getCoreStateSelector;
