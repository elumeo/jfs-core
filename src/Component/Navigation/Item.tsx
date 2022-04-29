import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Icon from '@mui/material/Icon';
import ListItemText from '@mui/material/ListItemText';
// import { pus } from 'react-router-dom';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { closeNavigation } from 'Store/Action';
import { useLocation, useNavigate } from 'react-router-dom';

export type Props = {
  iconName?: string;
  messageId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
  messageString?: string;
  authorizedOnly?: boolean;
  unauthorizedOnly?: boolean;
  onClickRoute?: string;
};

const NavigationItem: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      iconName,
      messageId,
      onClick,
      active,
      messageString,
      authorizedOnly,
      unauthorizedOnly,
      onClickRoute,
    },
    ref,
  ) => {
    const push = useNavigate();
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    // const { closeNavigation } = useActions();
    const { formatMessage } = useIntl();
    const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
    const visible =
      (!authorizedOnly && !unauthorizedOnly) || // always display these
      (isAuthorized && authorizedOnly) || // only when authorized
      (!isAuthorized && unauthorizedOnly); // only when unauthorized

    return visible ? (
      <ListItem
        ref={ref}
        button
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          // const {
          //   location: { pathname },
          // } = history;
          if (onClickRoute != undefined && pathname !== onClickRoute) {
            push(onClickRoute);
          }
          dispatch(closeNavigation());
          if (onClick) {
            onClick(event);
          }
        }}
        selected={active}>
        <ListItemIcon>
          <Icon>{iconName}</Icon>
        </ListItemIcon>
        <ListItemText
          primary={
            messageString ? messageString : formatMessage({ id: messageId })
          }
        />
      </ListItem>
    ) : (
      <></>
    );
  },
);

export default NavigationItem;
