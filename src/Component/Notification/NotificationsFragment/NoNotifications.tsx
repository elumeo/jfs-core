import  Paper  from '@material-ui/core/Paper';
import  FontIcon  from '@material-ui/core/Icon';
import React from 'react';
import { useIntl } from 'react-intl';

const NoNotifications: React.FC = () => {
  const {formatMessage} = useIntl();
  return  <div className="badges__notifications__empty">
    <Paper className="md-text badges__notifications__empty__message" elevation={1}>
    
          <>
            {formatMessage({ id: 'app.noNotifications' })}
          </>
    </Paper>
    <FontIcon className="badges__notifications__empty__icon">
      notifications
    </FontIcon>
  </div>
}

export default NoNotifications;
