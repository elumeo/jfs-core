import * as React from 'react';
import NavigationItem from '../navigation/NavigationItem';
import { injectIntl, InjectedIntlProps } from 'react-intl';

export interface IVersionNavigationItemProps extends InjectedIntlProps {
  version?: string;
}

const VersionNavigationItem: React.FC<IVersionNavigationItemProps> = ({
  intl: { formatMessage }, version
}) => (
  <NavigationItem
    iconName="info_outline"
    messageId="app.version"
    messageString={
      formatMessage(
        { id: 'app.version' },
        {
          versionNumber: (
            process.env.NODE_ENV && process.env.NODE_ENV == 'production'
              ? version
              : '-DEVELOP-'
          )
        }
      )
    }
  />
)

export default injectIntl(VersionNavigationItem);
