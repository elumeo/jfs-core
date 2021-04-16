import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import { Language } from 'Types/Language';
import * as MUI from '@material-ui/core';
import useActions from 'Store/useActions';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';

const Container: React.FC = () => {
    const { changeLanguageAction } = useActions();
    const { back: goBack } = useHistory();
    const { formatMessage } = useIntl();
    const language = useSelector(state => state.Core.Language.language);
  
    return (
      <MUI.Card style={{width: 330, margin: 'auto'}}>
        <MUI.CardHeader title={formatMessage({id: 'settings.title'})}/>
        <MUI.Select
          id='language'
          label={formatMessage({id: 'settings.language'})}
          value={language}
          onChange={(e) => {
            Cookie.set('lang', e.target.value);
            changeLanguageAction(e.target.value as Language);
          }}>
            <MUI.MenuItem value='de'>
              Deutsch
            </MUI.MenuItem>
            <MUI.MenuItem value='en'>
              English
            </MUI.MenuItem>
            <MUI.MenuItem value='it'>
              Italiano
            </MUI.MenuItem>
          </MUI.Select>
        <MUI.CardActions className='md-dialog-footer'>
          <MUI.Button  onClick={goBack}>
            {formatMessage({id: 'app.settings.done'})}
          </MUI.Button>
        </MUI.CardActions>
      </MUI.Card>
    );
}

export default Container;
