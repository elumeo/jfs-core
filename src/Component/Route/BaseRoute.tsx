import React from 'react';
import { Outlet, RouteProps } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

export type BaseRouteProps = RouteProps & {
  title?: string;
  subtitle?: string;
  translateTitle?: boolean;
  translateSubtitle?: boolean;
};

const BaseRoute: React.FC<BaseRouteProps> = ({
  title,
  subtitle,
  translateTitle,
  translateSubtitle,
}) => {
  const { formatMessage } = useIntl();
  const forcedTitle = !title
    ? formatMessage({ id: 'app.title' })
    : translateTitle
      ? formatMessage({ id: title })
      : title
  const optionalSubtitle =
    !subtitle
      ? null
      : translateSubtitle
        ? formatMessage({ id: subtitle })
        : subtitle

  return <>
    <Helmet><title>{`${forcedTitle}${optionalSubtitle ? ` | ${optionalSubtitle}` : ''}`}</title></Helmet>
    <Outlet />
  </>
};

export default BaseRoute
