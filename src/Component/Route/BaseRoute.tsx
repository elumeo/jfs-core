import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import International from '../International';

export type IBaseRouteProps = RouteProps & {
  Component?: () => JSX.Element;
  translationId?: string;
  updateDocumentTitle?: boolean;
}

const BaseRoute: React.FC<IBaseRouteProps> = (
  {
    Component,
    translationId,
    updateDocumentTitle,
    ...rest
  }
) => {
  if (Component) {
    rest.component = Component;
  }
  return (
    <International>
      {({ formatMessage }) => {
        if (updateDocumentTitle === true) {
          if (translationId) {
            document.title += ' | ' + formatMessage({ id: translationId });
          } else {
            document.title = formatMessage({ id: 'app.title' });
          }
        }
        return <Route {...rest}/>;
      }}
    </International>
  );
};

export default BaseRoute;
