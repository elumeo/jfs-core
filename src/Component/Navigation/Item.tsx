import React from 'react';
import * as MUI from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';
import { useIntl } from 'react-intl';

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
  ({
    iconName, messageId, onClick, active, messageString,
    authorizedOnly, unauthorizedOnly, onClickRoute
  }, ref) => {
    const history = useHistory();
    const { closeNavigation } = useActions();
    const { formatMessage } = useIntl()
    const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
    const visible = (
      !authorizedOnly && !unauthorizedOnly || // always display these
      isAuthorized && authorizedOnly || // only when authorized
      !isAuthorized && unauthorizedOnly // only when unauthorized
    );

    return (
      visible
        ? (
          <MUI.ListItem
            ref={ref}
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
            <MUI.ListItemIcon>
              <MUI.Icon>{iconName}</MUI.Icon>
            </MUI.ListItemIcon>
            <MUI.ListItemText primary={
              messageString
                ? messageString
                : formatMessage({id: messageId})} />
          </MUI.ListItem>
        )
        : <></>
    )
  }
);

export default NavigationItem;
