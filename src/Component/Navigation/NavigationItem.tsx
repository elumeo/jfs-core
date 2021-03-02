import React from 'react';
import { uniqueId } from 'lodash';
// import FontIcon from '@material-ui/core/FontIcons';
// import ListItem from '@material-ui/core/Lists/ListItem';
import FontIcon from '@material-ui/core/Icon'
import ListItem from '@material-ui/core/ListItem'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from 'Action/useActions';
import { useIntl } from 'react-intl';
import Global from 'Store/Reducer/Global';
import { ListItemIcon, ListItemText, MenuItem } from '@material-ui/core';

export interface INavigationItemProps {
  iconName?: string;
  messageId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
  messageString?: string;
  authorizedOnly?: boolean;
  unauthorizedOnly?: boolean;
  onClickRoute?: string;
}

const NavigationItem: React.FC<INavigationItemProps> = ({
  iconName, messageId, onClick, active, messageString,
  authorizedOnly, unauthorizedOnly, onClickRoute
}) => {
  const history = useHistory();
  const { closeNavigation } = useActions();
  const {formatMessage} = useIntl()
  const isAuthorized = useSelector(
    (state: Global.State) => state.Core.Session.isAuthorized
  );
  const visible = (
    !authorizedOnly && !unauthorizedOnly || // always display these
    isAuthorized && authorizedOnly || // only when authorized
    !isAuthorized && unauthorizedOnly // only when unauthorized
  );

  return (
    visible
      ? (
            <ListItem
              button 
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                const {location: {pathname}} = history;
                if (onClickRoute != undefined && pathname !== onClickRoute) {
                   history.push(onClickRoute);
                }
                closeNavigation();
                if (onClick) {
                  onClick(event);
                }
              }}
              selected={active}>
                <ListItemIcon>
                  <FontIcon>{iconName}</FontIcon>
                </ListItemIcon>
              <ListItemText primary={
                messageString
                  ? messageString
                  : formatMessage({id: messageId})} /> 
            </ListItem>
      )
      : <></>
  )
};

export default NavigationItem;
