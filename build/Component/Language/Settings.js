import React from 'react';
import { useIntl } from 'react-intl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from './Select';
import useLanguage from './useLanguage';
const Settings = () => {
    const language = useLanguage();
    const { formatMessage } = useIntl();
    return (React.createElement("div", { style: {
            width: 240,
        } },
        React.createElement(InputLabel, null, formatMessage({ id: 'settings.language' })),
        React.createElement(Select, { value: language.value, onChange: language.onChange })));
};
export default Settings;
