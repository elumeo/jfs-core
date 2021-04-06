import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import Select from './Select';
import useLanguage from './useLanguage';

const Settings: React.FC = () => {
  const language = useLanguage();
  const { formatMessage } = useIntl();
  return (
    <div style={{
      width: 240
    }}>
      <MUI.InputLabel
        id='settings__language-select'>
        {formatMessage({ id: 'settings.language' })}
      </MUI.InputLabel>
      <Select
        value={language.value}
        onChange={language.onChange}/>
    </div>
  );
};

export default Settings;
