import * as React from 'react';
import {Route} from 'react-router-dom';
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IBaseRouteProps extends  InjectedIntlProps {
  translationId?: string;
  render?: (props: any) => JSX.Element;
  path?: string;
}

const enhance = injectIntl;

const BaseRoute: React.FC<IBaseRouteProps> = ({render, intl: { formatMessage }, translationId, path, ...rest}) => {
  document.title = formatMessage({id: 'app.title'});
  if (translationId) {
    document.title += ' | ' +  formatMessage({id: translationId});
  }

  return (
    <Route
      {...rest}
      path={path}
      render={render}
    />
  )
};

export default enhance(BaseRoute);