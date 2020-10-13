import React from 'react';
import Cookie from 'js-cookie';
import { SelectField } from 'react-md';
import International from '../International';
import useActions from '../../Store/Action/useActions';
import { useSelector } from '../../Types/Redux';
const LanguageSettings = () => {
    const language = useSelector(state => (state.Core.Language.language ||
        state.Core.Configuration.config.Language));
    const { changeLanguageAction } = useActions();
    return (React.createElement("div", { className: 'language-settings' },
        React.createElement(International, null, ({ formatMessage }) => (React.createElement(SelectField, { id: 'language', label: formatMessage({ id: 'settings.language' }), menuItems: [
                { label: 'Deutsch', value: 'de' },
                { label: 'English', value: 'en' },
                { label: 'Italiano', value: 'it' }
            ], value: language, itemLabel: 'label', itemValue: 'value', fullWidth: true, simplifiedMenu: false, onChange: lang => {
                Cookie.set('lang', lang);
                changeLanguageAction(lang);
            } })))));
};
export default LanguageSettings;
//# sourceMappingURL=LanguageSettings.js.map