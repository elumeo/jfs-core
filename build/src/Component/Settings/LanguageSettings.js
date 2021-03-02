import React from 'react';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useIntl } from 'react-intl';
import { DialogContent, InputLabel } from '@material-ui/core';
const LANGUAGES = [
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
    { label: 'Italiano', value: 'it' }
];
const LanguageSettings = () => {
    const language = useSelector((state) => (state.Core.Language.language ||
        state.Core.Configuration.config.Language));
    const { changeLanguageAction } = useActions();
    const { formatMessage } = useIntl();
    const menuItems = LANGUAGES.map(lang => React.createElement(MenuItem, { key: 'settings-menu-item--' + lang.value, value: lang.value }, lang.label));
    return (React.createElement(React.Fragment, null,
        React.createElement(DialogContent, { className: 'language-settings' },
            React.createElement(InputLabel, { id: 'settings__language-select' }, formatMessage({ id: 'settings.language' })),
            React.createElement(Select, { id: 'settings__language-select', variant: 'standard', fullWidth: true, value: language, onChange: lang => {
                    // console.log('setting')
                    changeLanguageAction(lang.target.value);
                } }, menuItems))));
};
export default LanguageSettings;
//# sourceMappingURL=LanguageSettings.js.map