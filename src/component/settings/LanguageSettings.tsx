import * as React from 'react';

import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import IRootReducer from '../../store/reducer/RootReducer';
import { changeLanguageAction } from '../../store/action/LanguageAction';

import './LanguageSettings.scss';

export interface ILanguageSettingsProps extends InjectedIntlProps {
  language?: string;
  changeLanguageAction?: (language: string) => void;
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
              changeLanguageAction(lang as string);
            }
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (
  state: IRootReducer,
  ownProps: ILanguageSettingsProps
) => ({
  ...ownProps,
  language: state.languageReducer.language || state.configReducer.Language,
});

const enhance = compose(
  connect(mapStateToProps, { changeLanguageAction }),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(LanguageSettings);
