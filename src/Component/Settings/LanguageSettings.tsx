import React from 'react';

import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import { ICoreRootReducer } from '../../Store/Reducer';
import { changeLanguageAction } from '../../Store/Action/LanguageAction';

import './LanguageSettings.scss';
import International from '../International';

export interface ILanguageSettingsProps {
  language?: string;
  changeLanguageAction?: typeof changeLanguageAction;
}

enum LANGUAGE {
  GERMAN = 'de',
  ENGLISH = 'en',
  ITALIAN = 'it'
}

const LANGUAGES = [
  {label: 'Deutsch', value: LANGUAGE.GERMAN },
  {label: 'English', value: LANGUAGE.ENGLISH },
  {label: 'Italiano', value: LANGUAGE.ITALIAN }
];

const LanguageSettings: React.FC<ILanguageSettingsProps> = ({
  language,
  changeLanguageAction
}) => (
  <div className="language-settings">
    <International>
      {({ formatMessage }) => (
        <SelectField
          id="language"
          label={formatMessage({id: 'settings.language'})}
          menuItems={LANGUAGES}
          value={language}
          itemLabel="label"
          itemValue="value"
          fullWidth
          simplifiedMenu={false}
          onChange={
            lang => {
              Cookie.set('lang', lang);
              changeLanguageAction(lang.toString());
            }
          }/>
      )}
    </International>
  </div>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILanguageSettingsProps
): ILanguageSettingsProps => ({
  ...ownProps,
  language: (
    state.languageReducer.language || state.configReducer.config.Language
  ),
});

const enhance = connect(mapStateToProps, {changeLanguageAction});

export default enhance(LanguageSettings);
