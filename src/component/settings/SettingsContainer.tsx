import React, { ReactText } from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { History, withRouter } from 'react-router-dom';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell'
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import SelectField from 'react-md/lib/SelectFields';

import { changeLanguageAction } from '../../store/action/LanguageAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import Cookie from 'js-cookie';

import './SettingsContainer.scss';

const LANGUAGES = [
  { label: 'Deutsch', value: 'de' },
  { label: 'English', value: 'en' },
  { label: 'Italiano', value: 'it' }
];

// props & state ---------------------------------------------------------------
interface ISettingsContainerProps extends InjectedIntlProps {
  language?: string;
  changeLanguageAction: (language: ReactText) => void;
  history?: History;
}

// component -------------------------------------------------------------------
class SettingsContainer extends React.Component<ISettingsContainerProps> {
  render() {
    const {
      props: {
        intl: { formatMessage }, history: { goBack }, language, changeLanguageAction
      }
    } = this;

    return (
      <div className="md-grid settings-grid">
        <Cell size={12}>
          <Card style={{ width: 330, margin: 'auto' }} raise={true}>
            <CardTitle title={formatMessage({ id: 'settings.title' })} />
            <SelectField
              id="language"
              label={formatMessage({ id: 'settings.language' })}
              className="md-cell md-cell--12"
              menuItems={LANGUAGES}
              value={language}
              itemLabel="label"
              itemValue="value"
              onChange={lang => {
                  Cookie.set('lang', lang);
                  changeLanguageAction(lang);
                }
              }
            />
            <CardActions className="md-dialog-footer">
              <Button primary flat onClick={goBack}>
                {formatMessage({id: 'app.settings.done'})}
              </Button>
            </CardActions>
          </Card>
        </Cell>
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISettingsContainerProps
): ISettingsContainerProps => ({
  language: (
    state.languageReducer.language
      ? state.languageReducer.language
      : state.configReducer.config.Language
  ),
  ...ownProps
});

// noinspection JSUnusedGlobalSymbols
export default withRouter(injectIntl(connect(mapStateToProps, {changeLanguageAction}, null, {withRef: true})(SettingsContainer)));
