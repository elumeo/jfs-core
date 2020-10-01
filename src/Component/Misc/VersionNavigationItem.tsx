import React from 'react';
import NavigationItem from 'Component/Navigation/NavigationItem';
import International from 'Component/International';
import { useSelector } from 'Types/Redux';

const VersionNavigationItem: React.FC = () => {
  const version = useSelector<string>(
    state => state.Core.App.packageJson.version
  );
  return (
    <International>
      {({ formatMessage }) => (
        <NavigationItem
          iconName="info_outline"
          messageId="app.version"
          messageString={
            formatMessage(
              {id: 'app.version'},
              {
                versionNumber: (
                  process.env.NODE_ENV && process.env.NODE_ENV == 'production'
                    ? version
                    : '-DEVELOP-'
                )
              }
            )
          }/>
      )}
    </International>
  );
}

export default VersionNavigationItem;
