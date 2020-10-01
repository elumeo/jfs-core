import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { injectIntl, InjectedIntl } from 'react-intl';

export type IBaseRouteProps = RouteProps & {
  intl?: InjectedIntl;
  Component?: () => JSX.Element;
  translationId?: string;
  updateDocumentTitle?: boolean;
}

const BaseRoute: React.FC<IBaseRouteProps> = ({
  intl: { formatMessage },
  Component,
  translationId,
  updateDocumentTitle,
  ...rest
}) => {
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

const enhance = injectIntl;

export default enhance(BaseRoute);
