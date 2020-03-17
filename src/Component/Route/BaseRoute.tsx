import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import International from '../International';

export type IBaseRouteProps = RouteProps & {
  Component?: () => JSX.Element;
  translationId?: string;
}

const BaseRoute: React.FC<IBaseRouteProps> = ({
  Component,
  translationId,
  ...rest
}) => {
  if (Component) {
    rest.component = Component;
  }
  return (
    <International>
      {({ formatMessage }) => {
        document.title = formatMessage({id: 'app.title'});
        if (translationId) {
          document.title += ' | ' + formatMessage({id: translationId});
        }
        return <Route {...rest}/>;
      }}
    </International>
  );
};

export default BaseRoute;
