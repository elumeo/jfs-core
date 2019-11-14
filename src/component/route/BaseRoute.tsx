import * as React from 'react';
import { Route } from 'react-router-dom';
import { injectIntl, InjectedIntl } from 'react-intl';

export interface IBaseRouteProps extends Route {
  translationId?: string;
  exact?: boolean;
  render?: (props: any) => JSX.Element;
  path?: string;
  intl?: InjectedIntl;
}

const BaseRoute: React.FC<IBaseRouteProps> = ({
  intl: { formatMessage },
  render,
  translationId,
  path,
  ...rest
}) => {
  document.title = formatMessage({id: 'app.title'});
  if (translationId) {
    document.title += ' | ' +  formatMessage({id: translationId});
  }
  return <Route {...rest} path={path} render={render}/>;
};

const enhance = injectIntl;

export default enhance(BaseRoute);