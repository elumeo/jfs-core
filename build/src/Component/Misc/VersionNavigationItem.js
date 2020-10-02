import React from 'react';
import NavigationItem from '../../../Component/Navigation/NavigationItem';
import International from '../../../Component/International';
import { useSelector } from '../../../Types/Redux';
const VersionNavigationItem = () => {
    const version = useSelector(state => state.Core.App.packageJson.version);
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement(NavigationItem, { iconName: "info_outline", messageId: "app.version", messageString: formatMessage({ id: 'app.version' }, {
            versionNumber: (process.env.NODE_ENV && process.env.NODE_ENV == 'production'
                ? version
                : '-DEVELOP-')
        }) }))));
};
export default VersionNavigationItem;
//# sourceMappingURL=VersionNavigationItem.js.map