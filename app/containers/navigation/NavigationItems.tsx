import * as _ from 'lodash';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Divider from 'react-md/lib/Dividers';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';

type FormatMessageFn = (messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object) => string;

export interface INavItem {
  divider?: boolean;
  iconName?: string;
  messageId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
  authorizedOnly?: boolean;
  unauthorizedOnly?: boolean;
  messageString?: string;
}

export const createNavItems = (
  navItems: INavItem[],
  isAuthorized: boolean,
  formatMessage: FormatMessageFn
): JSX.Element[] => {
  const displayedNavItems = _.filter(
    navItems,
    item =>
      (!item.authorizedOnly && !item.unauthorizedOnly) || // always display these
      (isAuthorized && item.authorizedOnly) || // only when authorized
      (!isAuthorized && item.unauthorizedOnly) // only when unauthorized
  );

  return displayedNavItems.map(item => {
    if (item.divider) {
      return <Divider key={_.uniqueId('navItem_')} />;
    } else {
      return (
        <ListItem
          key={_.uniqueId('navItem_')}
          primaryText={
            item.messageString
              ? item.messageString
              : formatMessage({ id: item.messageId })}
          leftIcon={<FontIcon>{item.iconName}</FontIcon>}
          onClick={item.onClick}
          active={item.active}
        />
      );
    }
  });
};
