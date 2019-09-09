import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import SelectField from 'react-md/lib/SelectFields';

import { changeLanguageAction } from '../../store/action/BaseAction';
import { IRootReducer } from '../../store/reducer/RootReducer';
import Config from '../../base/Config';
import { ReactText } from "react";
import CardActions from "react-md/lib/Cards/CardActions";
import {Button} from "react-md";
import { History, withRouter } from "react-router-dom";

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
    const { intl: { formatMessage }, language } = this.props;

    return (
      <div className="md-grid">
        <div className="md-cell md-cell--12">
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
              onChange={
                lang =>
                {
                  let cookieJSON = {};
                  if (document.cookie.length) {
                    cookieJSON = JSON.parse(document.cookie);
                  }
                  cookieJSON['lang'] = lang;
                  document.cookie = JSON.stringify(cookieJSON);

                  this.props.changeLanguageAction(lang);
                }
              }
            />
            <div style={{ height: 20 }} />
            <CardActions className="md-dialog-footer">
              <Button primary flat onClick={this.props.history.goBack} >
                <label>{formatMessage({id: 'Done'})}</label>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ISettingsContainerProps): ISettingsContainerProps => ({
  language: state.baseReducer.language ? state.baseReducer.language : Config.Language,
  ...ownProps
});

// noinspection JSUnusedGlobalSymbols
export default withRouter(injectIntl(connect(mapStateToProps, {changeLanguageAction}, null, {withRef: true})(SettingsContainer)));
