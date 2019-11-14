import * as React from 'react';

import { injectIntl } from 'react-intl';
import { Card, CardText, CardTitle } from 'react-md';

export default injectIntl(({ intl: { formatMessage } }) =>
  <Card className="md-cell--2-desktop md-cell--2-tablet md-cell--4-phone md-block-centered">
    <CardTitle title={formatMessage({ id: 'login.accessDenied' })}/>
    <CardText>{formatMessage({ id: 'login.noUserRights' })}</CardText>
  </Card>
)