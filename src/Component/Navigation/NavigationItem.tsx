import React from 'react';
import * as _ from 'lodash';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';

import { withRouter } from 'react-router-dom';
import { History } from 'history';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import { closeNavigation } from '../../Store/Action/NavigationAction';
import International from '../International';

export interface INavigationItemProps {
  iconName?: string;
  messageId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
  messageString?: string;
  authorizedOnly?: boolean;
  unauthorizedOnly?: boolean;
  isAuthorized?: boolean;
  closeNavigation?: typeof closeNavigation;
  onClickRoute?: string;
  history?: History;
}

const NavigationItem: React.FC<INavigationItemProps> = ({
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
        <International>
          {({ formatMessage }) => (
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
              active={active}/>
          )}
        </International>
      )
      : <></>
  )
};

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationItemProps
): INavigationItemProps => ({
  ...ownProps,
  isAuthorized: state.sessionReducer.isAuthorized
});

const enhance = compose(
  connect(mapStateToProps, {closeNavigation}),
  withRouter
);

export default enhance(NavigationItem);
