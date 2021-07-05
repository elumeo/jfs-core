import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import useActions from '../../../Store/useActions';
import { useIntl } from 'react-intl';
import { useSelector } from '../../../Types/Redux';
const Container = () => {
    const { changeLanguageAction } = useActions();
    const { goBack } = useHistory();
    const { formatMessage } = useIntl();
    const language = useSelector(state => state.Core.Language.language);
    return (React.createElement(Card, { style: { width: 330, margin: 'auto' } },
        React.createElement(CardHeader, { title: formatMessage({ id: 'settings.title' }) }),
        React.createElement(Select, { id: 'language', label: formatMessage({ id: 'settings.language' }), value: language, onChange: (e) => {
                Cookie.set('lang', e.target.value);
                changeLanguageAction(e.target.value);
            } },
            React.createElement(MenuItem, { value: 'de' }, "Deutsch"),
            React.createElement(MenuItem, { value: 'en' }, "English"),
            React.createElement(MenuItem, { value: 'it' }, "Italiano")),
        React.createElement(CardActions, { className: 'md-dialog-footer' },
            React.createElement(Button, { onClick: goBack }, formatMessage({ id: 'app.settings.done' })))));
};
export default Container;
