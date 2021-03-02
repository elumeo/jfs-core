import React from 'react';
import { Language } from 'Types/Language';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useIntl } from 'react-intl';
import { DialogContent, InputLabel } from '@material-ui/core';
const LANGUAGES = [
  {label: 'Deutsch', value: 'de'},
  {label: 'English', value: 'en'},
  {label: 'Italiano', value: 'it'}
];
const LanguageSettings: React.FC = () => {
  const language = useSelector<Language>(state => (
    state.Core.Language.language ||
    state.Core.Configuration.config.Language
  ));
  const { changeLanguageAction } = useActions();
  const {formatMessage} = useIntl();
  const menuItems = LANGUAGES.map(lang => <MenuItem key={'settings-menu-item--'+lang.value} value={lang.value  as Language} >{lang.label}</MenuItem> )
  return (<>

    <DialogContent className='language-settings'>
    {/* <DialogContentText> */}
    <InputLabel id='settings__language-select'>{formatMessage({ id: 'settings.language' })}</InputLabel>
          <Select
            id='settings__language-select'
            variant={'standard'}
            fullWidth
            value={language}
            onChange={
              lang => {
                // console.log('setting')
                changeLanguageAction(lang.target.value as Language);
              }
            }>
              {menuItems}
            </Select>
            {/* </DialogContentText> */}
    </DialogContent>
    </>
  );
};

export default LanguageSettings;
