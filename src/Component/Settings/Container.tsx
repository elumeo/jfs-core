import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie';
import { Language } from 'Types/Language';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import useActions from 'Store/useActions';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';

const Container: React.FC = () => {
    const { changeLanguageAction } = useActions();
    const { goBack } = useHistory();
    const { formatMessage } = useIntl();
    const language = useSelector(state => state.Core.Language.language);
  
    return (
      <Card style={{width: 330, margin: 'auto'}}>
        <CardHeader title={formatMessage({id: 'settings.title'})}/>
        <Select
          id='language'
          label={formatMessage({id: 'settings.language'})}
          value={language}
          onChange={(e) => {
            Cookie.set('lang', e.target.value as string);
            changeLanguageAction(e.target.value as Language);
          }}>
            <MenuItem value='de'>
              Deutsch
            </MenuItem>
            <MenuItem value='en'>
              English
            </MenuItem>
            <MenuItem value='it'>
              Italiano
            </MenuItem>
          </Select>
        <CardActions className='md-dialog-footer'>
          <Button  onClick={goBack}>
            {formatMessage({id: 'app.settings.done'})}
          </Button>
        </CardActions>
      </Card>
    );
}

export default Container;
