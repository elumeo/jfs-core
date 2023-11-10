import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import { Language } from 'Types/Language';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import { useDispatch } from 'react-redux';
import { changeLanguageAction } from 'Store/Action';

const Container: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { formatMessage } = useIntl();
  const language = useSelector(state => state.Core.Language.language);
  const goBack = () => navigate(-1);
  return (
    <Card sx={{ width: 330, margin: 'auto' }}>
      <CardHeader title={formatMessage({ id: 'settings.title' })} />
      <Select
        id='language'
        label={formatMessage({ id: 'settings.language' })}
        value={language}
        onChange={e => {
          Cookie.set('lang', e.target.value as string);
          dispatch(changeLanguageAction(e.target.value as Language));
        }}>
        <MenuItem value='de'>Deutsch</MenuItem>
        <MenuItem value='en' color={'secondary'}>English</MenuItem>
        <MenuItem value='it'>Italiano</MenuItem>
      </Select>

      <CardActions>
        <Button onClick={goBack}>
          {formatMessage({ id: 'app.settings.done' })}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Container;
