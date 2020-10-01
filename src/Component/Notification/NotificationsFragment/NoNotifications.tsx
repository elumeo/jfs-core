import { Paper } from 'react-md/lib/Papers';
import { FontIcon } from 'react-md/lib/FontIcons';
import React from 'react';
import International from 'Component/International';

const NoNotifications: React.FC = () => (
  <div className="badges__notifications__empty">
    <Paper className="md-text badges__notifications__empty__message" zDepth={1}>
      <International>
        {({ formatMessage }) => (
          <>
            {formatMessage({ id: 'app.noNotifications' })}
          </>
        )}
      </International>
    </Paper>
    <FontIcon className="badges__notifications__empty__icon">
      notifications
    </FontIcon>
  </div>
);

export default NoNotifications;
