import { changeLanguageAction } from '../../Store/Action/LanguageAction';
export interface ILanguageSettingsProps {
    language?: string;
    changeLanguageAction?: typeof changeLanguageAction;
}
declare const _default: import("react-redux").ComponentClass<ILanguageSettingsProps>;
export default _default;
