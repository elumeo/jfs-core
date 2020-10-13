import React from 'react';
import Cookie from 'js-cookie';
import { SelectField } from 'react-md';
import { Language } from 'Types/Language';
import International from 'Component/International'
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

const LanguageSettings: React.FC = () => {
  const language = useSelector<Language>(state => (
    state.Core.Language.language ||
    state.Core.Configuration.config.Language
  ));
  const { changeLanguageAction } = useActions();
  return (
    <div className='language-settings'>
      <International>
        {({ formatMessage }) => (
          <SelectField
            id='language'
            label={formatMessage({ id: 'settings.language' })}
            menuItems={[
              {label: 'Deutsch', value: 'de' },
              {label: 'English', value: 'en' },
              {label: 'Italiano', value: 'it' }
            ]}
            value={language}
            itemLabel='label'
            itemValue='value'
            fullWidth
            simplifiedMenu={false}
            onChange={
              lang => {
                Cookie.set('lang', lang);
                changeLanguageAction(lang as Language);
              }
            }/>
        )}
      </International>
    </div>
  );
};

export default LanguageSettings;
