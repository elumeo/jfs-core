import React from 'react';
import { useIntl } from 'react-intl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from './Select';
import useLanguage from './useLanguage';

const Settings: React.FC = () => {
  const language = useLanguage();
  const { formatMessage } = useIntl();
  return (
    <div style={{
      width: 240
    }}>
      <InputLabel>
        {formatMessage({ id: 'settings.language' })}
      </InputLabel>
      <Select
        value={language.value}
        onChange={language.onChange}/>
    </div>
  );
};

export default Settings;
