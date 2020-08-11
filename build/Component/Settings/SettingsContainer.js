import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import SelectField from 'react-md/lib/SelectFields';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';
import Cookie from 'js-cookie';
import './SettingsContainer.scss';
import { compose } from 'redux';
import International from '../International';
const LANGUAGES = [
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
    { label: 'Italiano', value: 'it' }
];
class SettingsContainer extends React.Component {
    render() {
        const { props: { history: { goBack }, language, changeLanguageAction } } = this;
        return (React.createElement("div", { className: 'md-grid settings-grid' },
            React.createElement(Cell, { size: 12 },
                React.createElement(Card, { style: { width: 330, margin: 'auto' }, raise: true },
                    React.createElement(International, null, ({ formatMessage }) => (React.createElement(React.Fragment, null,
                        React.createElement(CardTitle, { title: formatMessage({ id: 'settings.title' }) }),
                        React.createElement(SelectField, { id: 'language', label: formatMessage({ id: 'settings.language' }), className: 'md-cell md-cell--12', menuItems: LANGUAGES, value: language, itemLabel: 'label', itemValue: 'value', onChange: lang => {
                                Cookie.set('lang', lang);
                                changeLanguageAction(lang.toString());
                            } }),
                        React.createElement(CardActions, { className: 'md-dialog-footer' },
                            React.createElement(Button, { primary: true, flat: true, onClick: goBack }, formatMessage({ id: 'app.settings.done' }))))))))));
    }
}
const mapStateToProps = (state, ownProps) => (Object.assign({ language: (state.Core.Language.language
        ? state.Core.Language.language
        : state.Core.Configuration.config.Language) }, ownProps));
const enhance = compose(connect(mapStateToProps, { changeLanguageAction }), withRouter);
export default enhance(SettingsContainer);
//# sourceMappingURL=SettingsContainer.js.map