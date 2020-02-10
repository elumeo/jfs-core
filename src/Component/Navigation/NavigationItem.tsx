import * as React from 'react';
import * as _ from 'lodash';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';

import { withRouter } from 'react-router-dom';
import { History } from 'history';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import { closeNavigation } from '../../Store/Action/NavigationAction';

export interface INavigationItemProps extends InjectedIntlProps {
  divider?: boolean;
  iconName?: string;
  messageId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
  visible?: boolean;
  messageString?: string;
  authorizedOnly?: boolean;
  unauthorizedOnly?: boolean;
  isAuthorized?: boolean;
  closeNavigation?: typeof closeNavigation;
  onClickRoute?: string;
  history?: History;
}

const NavigationItem: React.FC<INavigationItemProps> = ({
  intl: {formatMessage},
  iconName, messageId, onClick, active, messageString,
  authorizedOnly, unauthorizedOnly,
  isAuthorized, closeNavigation, onClickRoute, history
}) => {
  const visible = (
    !authorizedOnly && !unauthorizedOnly || // always display these
    isAuthorized && authorizedOnly || // only when authorized
    !isAuthorized && unauthorizedOnly // only when unauthorized
  );

  return (
    visible
      ? (
        <ListItem
          key={_.uniqueId('navItem_')}
          primaryText={
            messageString
              ? messageString
              : formatMessage({id: messageId})}
          leftIcon={<FontIcon>{iconName}</FontIcon>}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            const {location: {pathname}} = history;
            if (pathname !== onClickRoute) {
              history.push(onClickRoute);
            }
            closeNavigation();
            if (onClick) {
              onClick(event);
            }
          }}
          active={active}
        />
      )
      : <></>
  )
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationItemProps
): INavigationItemProps => ({
  ...ownProps,
  isAuthorized: state.sessionReducer.isAuthorized
});

const enhance = compose(
  connect(mapStateToProps, {closeNavigation}),
  withRouter,
  injectIntl
);

export default enhance(NavigationItem);
