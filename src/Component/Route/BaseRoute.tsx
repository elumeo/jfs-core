import React, { useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useIntl } from 'react-intl';

export type IBaseRouteProps = RouteProps & {
  Component?: React.FC;
  translationId?: string;
};

const BaseRoute: React.FC<IBaseRouteProps> = ({
  Component,
  translationId,
  component = Component,
  ...rest
}) => {
  const { formatMessage } = useIntl();
  useEffect(
    () => {
      if (translationId) {
        document.title += ' | ' + formatMessage({ id: translationId });
      }
      else {
        document.title = formatMessage({ id: 'app.title' });
      }
    },
    [translationId]
  )

  return <Route component={component}
    {...rest} />;
};

export default BaseRoute;
