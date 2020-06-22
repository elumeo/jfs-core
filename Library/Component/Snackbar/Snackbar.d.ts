import { dismissToastAction } from '../../Store/Action/ToastAction';
import { IToastConfig } from '../../Store/Reducer/Core/ToastReducer';
import { List } from 'immutable';
export interface IAppSnackbarProps {
    toasts?: List<IToastConfig>;
    dismissToastAction?: typeof dismissToastAction;
}
declare const _default: import("react-redux").ComponentClass<IAppSnackbarProps>;
export default _default;
