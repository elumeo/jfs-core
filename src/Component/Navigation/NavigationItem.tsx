import React from 'react';
import { uniqueId } from 'lodash';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import { useHistory } from 'react-router-dom';
import International from 'Component/International';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';

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
  const isAuthorized = useSelector<boolean>(
    state => state.Core.Session.isAuthorized
  );
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
              key={uniqueId('navItem_')}
              primaryText={
                messageString
                  ? messageString
                  : formatMessage({id: messageId})}
              leftIcon={<FontIcon>{iconName}</FontIcon>}
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
              active={active}/>
          )}
        </International>
      )
      : <></>
  )
};

export default NavigationItem;
