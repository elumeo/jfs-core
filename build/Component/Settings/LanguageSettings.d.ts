import React from 'react';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';
export interface ILanguageSettingsProps {
    language?: string;
    changeLanguageAction?: typeof changeLanguageAction;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ILanguageSettingsProps>, Pick<ILanguageSettingsProps, never> & ILanguageSettingsProps>;
export default _default;
