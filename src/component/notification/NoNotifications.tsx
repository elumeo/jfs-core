import { Paper } from 'react-md/lib/Papers';
import { FontIcon } from 'react-md/lib/FontIcons';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export default () =>
  <div className="badges__notifications__empty">
    <Paper className="md-text badges__notifications__empty__message" zDepth={1}>
      <FormattedMessage id="app.noNotifications"/>
    </Paper>
    <FontIcon className="badges__notifications__empty__icon">notifications</FontIcon>
  </div>;