import React, { useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import International from '../International';
import { useLocation, useParams } from 'react-router';
// noinspection ES6PreferShortImport
import { updateRouteDetails } from '../../Store/Action/RouterAction';
import { useDispatch } from 'react-redux';

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
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(updateRouteDetails({ location, params }));
    },
    [Object.values(location), Object.values(params)]
  )
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
