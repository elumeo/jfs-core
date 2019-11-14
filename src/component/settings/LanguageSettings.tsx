import * as React from 'react';

import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { changeLanguageAction } from '../../store/action/LanguageAction';

import './LanguageSettings.scss';

export interface ILanguageSettingsProps extends InjectedIntlProps {
  language?: string;
  changeLanguageAction?: typeof changeLanguageAction;
}

export interface ILanguageSettingsState {

}

const LANGUAGES = [
  { label: 'Deutsch', value: 'de' },
  { label: 'English', value: 'en' },
  { label: 'Italiano', value: 'it' }
];

class LanguageSettings extends React.Component<ILanguageSettingsProps, ILanguageSettingsState> {
  render() {
    const {
      props: { intl: { formatMessage }, language, changeLanguageAction }
    } = this;

    return (
      <div className="language-settings">
        <SelectField
          id="language"
          label={formatMessage({ id: 'settings.language' })}
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
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILanguageSettingsProps
): ILanguageSettingsProps => ({
  ...ownProps,
  language: (
    state.languageReducer.language || state.configReducer.config.Language
  ),
});

const enhance = compose(
  connect(mapStateToProps, { changeLanguageAction }),
  injectIntl
);

export default enhance(LanguageSettings);
