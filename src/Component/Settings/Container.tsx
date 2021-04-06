import React from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { History } from 'history';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import SelectField from '@material-ui/core/Select';

// import { changeLanguageAction } from 'Store/Action/LanguageAction';
// import Global from 'Store/Reducer/Global'
import Cookie from 'js-cookie';

import './SettingsContainer.scss';
import { compose } from 'redux';
import { Language } from 'Types/Language';
import { Grid, MenuItem } from '@material-ui/core';
import useActions from 'Store/useActions';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import { getLanguageStateSelector } from 'Store/Selector/Core/Language';

// ToDo: Duplikat entfernen => Siehe LanguageSettings.tsx
const LANGUAGES = [
  {label: 'Deutsch', value: 'de'},
  {label: 'English', value: 'en'},
  {label: 'Italiano', value: 'it'}
];

// interface ISettingsContainerProps {
//   language?: string;
//   changeLanguageAction?: typeof changeLanguageAction;
//   history?: History;
// }

const  SettingsContainer = () => {
    const {changeLanguageAction} = useActions();
    const {back: goBack} = useHistory();
    const {formatMessage} = useIntl();
    const language = useSelector(getLanguageStateSelector);
    // const {
    //   props: { history: {goBack}, language, changeLanguageAction }
    // }
    const menuItems = LANGUAGES.map(lang => <MenuItem key={`settings-menu-item--${lang.value}`} value={lang.value  as Language} >{lang.label}</MenuItem> )
    return (
      // <Grid container>
      //   <Grid xs={12} item>
          <Card style={{width: 330, margin: 'auto'}}>
                <>
                  <CardHeader title={formatMessage({id: 'settings.title'})}/>
                  <SelectField
                    id='language'
                    label={formatMessage({id: 'settings.language'})}
                    // className='md-cell md-cell--12'
                    value={language}
                    // itemLabel='label'
                    // itemValue='value'
                    onChange={(e) => {
                      Cookie.set('lang', e.target.value);
                      changeLanguageAction(e.target.value as Language);
                    }}>
                      {menuItems}
                    </SelectField>
                  <CardActions className='md-dialog-footer'>
                    <Button  onClick={goBack}>
                      {formatMessage({id: 'app.settings.done'})}
                    </Button>
                  </CardActions>
                </>
          </Card>
      //   </Grid>
      // </Grid>
    );

}

// const mapStateToProps = (
//   state: Global.State,
//   ownProps: ISettingsContainerProps
// ): ISettingsContainerProps => ({
//   language: (
//     state.Core.Language.language
//       ? state.Core.Language.language
//       : state.Core.Configuration.config.Language
//   ),
//   ...ownProps
// });

// const enhance = compose(
//   connect(mapStateToProps, {changeLanguageAction}),
//   withRouter
// );

// noinspection JSUnusedGlobalSymbols
export default SettingsContainer
