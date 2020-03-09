import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import International from '../International';

export interface IBaseRouteProps extends RouteProps {
  translationId?: string;
  exact?: boolean;
  render?: (props: any) => JSX.Element;
  path?: string;
}

const BaseRoute: React.FC<IBaseRouteProps> = ({
  render,
  translationId,
  path,
  ...rest
}) => {
  return (
    <International>
      {({ formatMessage }) => {
        document.title = formatMessage({id: 'app.title'});
        if (translationId) {
          document.title += ' | ' + formatMessage({id: translationId});
        }
        return <Route {...rest} path={path} render={render}/>;
      }}
    </International>
  );
};

export default BaseRoute;
