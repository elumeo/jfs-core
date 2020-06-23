import { History } from 'history';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';
import './SettingsContainer.scss';
interface ISettingsContainerProps {
    language?: string;
    changeLanguageAction?: typeof changeLanguageAction;
    history?: History;
}
declare const _default: import("react-redux").ComponentClass<ISettingsContainerProps>;
export default _default;
