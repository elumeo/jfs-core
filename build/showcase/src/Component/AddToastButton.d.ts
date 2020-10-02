import { IToastConfig } from '@elumeo/jfs-core/build/Store/Reducer/Core/ToastReducer';
import { InjectedIntlProps } from 'react-intl';
export interface IAddToastButtonProps extends InjectedIntlProps {
    addToastAction?: (c: IToastConfig) => void;
}
declare const _default: import("react-redux").ConnectedComponent<any, Pick<unknown, never>>;
export default _default;
