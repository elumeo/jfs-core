import React from 'react';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { SelectField } from 'react-md';
import { LANGUAGE } from '../../Types/Language';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';
import International from '../International';
const LANGUAGES = [
    { label: 'Deutsch', value: LANGUAGE.GERMAN },
    { label: 'English', value: LANGUAGE.ENGLISH },
    { label: 'Italiano', value: LANGUAGE.ITALIAN }
];
const LanguageSettings = ({ language, changeLanguageAction: _changeLanguageAction }) => React.createElement("div", { className: 'language-settings' },
    React.createElement(International, null, ({ formatMessage }) => (React.createElement(SelectField, { id: 'language', label: formatMessage({ id: 'settings.language' }), menuItems: LANGUAGES, value: language, itemLabel: 'label', itemValue: 'value', fullWidth: true, simplifiedMenu: false, onChange: lang => {
            Cookie.set('lang', lang);
            _changeLanguageAction(lang.toString());
        } }))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { language: (state.Core.Language.language ||
        state.Core.Configuration.config.Language) }));
const enhance = connect(mapStateToProps, { changeLanguageAction });
export default enhance(LanguageSettings);
//# sourceMappingURL=LanguageSettings.js.map
