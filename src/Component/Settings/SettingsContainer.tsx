import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import Button from 'react-md/lib/Buttons/Button';
import Cell from 'react-md/lib/Grids/Cell'
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import SelectField from 'react-md/lib/SelectFields';

import { changeLanguageAction } from 'Store/Action/LanguageAction';
import Global from 'Store/Reducer/Global';
import Cookie from 'js-cookie';

import './SettingsContainer.scss';
import { compose } from 'redux';
import International from 'Component/International';
import { Language } from 'Types/Language';

// ToDo: Duplikat entfernen => Siehe LanguageSettings.tsx
const LANGUAGES = [
  {label: 'Deutsch', value: 'de'},
  {label: 'English', value: 'en'},
  {label: 'Italiano', value: 'it'}
];

interface ISettingsContainerProps {
  language?: string;
  changeLanguageAction?: typeof changeLanguageAction;
  history?: History;
}

class SettingsContainer extends React.Component<ISettingsContainerProps> {
  render() {
    const {
      props: { history: {goBack}, language, changeLanguageAction }
    } = this;

    return (
      <div className='md-grid settings-grid'>
        <Cell size={12}>
          <Card style={{width: 330, margin: 'auto'}} raise={true}>
            <International>
              {({ formatMessage }) => (
                <>
                  <CardTitle title={formatMessage({id: 'settings.title'})}/>
                  <SelectField
                    id='language'
                    label={formatMessage({id: 'settings.language'})}
                    className='md-cell md-cell--12'
                    menuItems={LANGUAGES}
                    value={language}
                    itemLabel='label'
                    itemValue='value'
                    onChange={lang => {
                      Cookie.set('lang', lang);
                      changeLanguageAction(lang as Language);
                    }}/>
                  <CardActions className='md-dialog-footer'>
                    <Button primary flat onClick={goBack}>
                      {formatMessage({id: 'app.settings.done'})}
                    </Button>
                  </CardActions>
                </>
              )}
            </International>
          </Card>
        </Cell>
      </div>
    );
  }
}

const mapStateToProps = (
  state: Global.State,
  ownProps: ISettingsContainerProps
): ISettingsContainerProps => ({
  language: (
    state.Core.Language.language
      ? state.Core.Language.language
      : state.Core.Configuration.config.Language
  ),
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {changeLanguageAction}),
  withRouter
);

// noinspection JSUnusedGlobalSymbols
export default enhance(SettingsContainer);
