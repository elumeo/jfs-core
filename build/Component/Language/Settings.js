import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import Select from './Select';
import useLanguage from './useLanguage';
const Settings = () => {
    const language = useLanguage();
    const { formatMessage } = useIntl();
    return (React.createElement("div", { style: {
            width: 240
        } },
        React.createElement(MUI.InputLabel, { id: 'settings__language-select' }, formatMessage({ id: 'settings.language' })),
        React.createElement(Select, { value: language.value, onChange: language.onChange })));
};
export default Settings;
//# sourceMappingURL=Settings.js.map