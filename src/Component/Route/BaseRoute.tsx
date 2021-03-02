import React, { useEffect } from 'react';
import { Route, RouteProps, useLocation, useParams } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router';
// noinspection ES6PreferShortImport
import { updateRouteDetails } from '../../Store/Action/RouterAction';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

export type IBaseRouteProps = RouteProps & {
  Component?: () => JSX.Element;
  translationId?: string;
  updateDocumentTitle?: boolean;
}

const BaseRoute: React.FC<IBaseRouteProps> = ({
  Component,
  translationId,
  updateDocumentTitle,
  ...rest
}) => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const {formatMessage} = useIntl()
  useEffect(
    () => {
      dispatch(updateRouteDetails({ location, params }));
    },
    [rest.path]
  )
  if (Component) {
    rest.component = Component;
  }
  if (updateDocumentTitle === true) {
    if (translationId) {
      document.title += ' | ' + formatMessage({ id: translationId });
    }
    else {
      document.title = formatMessage({ id: 'app.title' });
    }
  }
  return <Route {...rest}/>;
};


export default BaseRoute;
