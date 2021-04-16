import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import * as MUI from '@material-ui/core';
import useActions from '../../Store/useActions';
import { useIntl } from 'react-intl';
import { useSelector } from '../../Types/Redux';
const Container = () => {
    const { changeLanguageAction } = useActions();
    const { back: goBack } = useHistory();
    const { formatMessage } = useIntl();
    const language = useSelector(state => state.Core.Language.language);
    return (React.createElement(MUI.Card, { style: { width: 330, margin: 'auto' } },
        React.createElement(MUI.CardHeader, { title: formatMessage({ id: 'settings.title' }) }),
        React.createElement(MUI.Select, { id: 'language', label: formatMessage({ id: 'settings.language' }), value: language, onChange: (e) => {
                Cookie.set('lang', e.target.value);
                changeLanguageAction(e.target.value);
            } },
            React.createElement(MUI.MenuItem, { value: 'de' }, "Deutsch"),
            React.createElement(MUI.MenuItem, { value: 'en' }, "English"),
            React.createElement(MUI.MenuItem, { value: 'it' }, "Italiano")),
        React.createElement(MUI.CardActions, { className: 'md-dialog-footer' },
            React.createElement(MUI.Button, { onClick: goBack }, formatMessage({ id: 'app.settings.done' })))));
};
export default Container;
