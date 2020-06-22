import React from 'react';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import SelectField from 'react-md/lib/SelectFields/SelectField';
import Global from '../../Store/Reducer/Global';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';
import { LANGUAGE } from '../../Types/Language';
import International from '../International'
export interface ILanguageSettingsProps {
  language?: string;
  changeLanguageAction?: typeof changeLanguageAction;
}

const LANGUAGES = [
  {label: 'Deutsch', value: LANGUAGE.GERMAN },
  {label: 'English', value: LANGUAGE.ENGLISH },
  {label: 'Italiano', value: LANGUAGE.ITALIAN }
];

const LanguageSettings: React.FC<ILanguageSettingsProps> = (
  {
    language,
    changeLanguageAction: _changeLanguageAction
  }
) =>
  <div className='language-settings'>
    <International>
      {({ formatMessage }) => (
        <SelectField
          id='language'
          label={formatMessage({ id: 'settings.language' })}
          menuItems={LANGUAGES}
          value={language}
          itemLabel='label'
          itemValue='value'
          fullWidth
          simplifiedMenu={false}
          onChange={
            lang => {
              Cookie.set('lang', lang);
              _changeLanguageAction(lang.toString());
            }
          }/>
      )}
    </International>
  </div>;

const mapStateToProps = (
  state: Global.State,
  ownProps: ILanguageSettingsProps
): ILanguageSettingsProps => ({
  ...ownProps,
  language: (
    state.Core.Language.language ||
    state.Core.Configuration.config.Language
  ),
});

const enhance = connect(mapStateToProps, {changeLanguageAction});

export default enhance(LanguageSettings);
