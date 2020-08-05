import React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import { connect } from 'react-redux';
import International from '../International';
const VersionNavigationItem = ({ version }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(NavigationItem, { iconName: "info_outline", messageId: "app.version", messageString: formatMessage({ id: 'app.version' }, {
        versionNumber: (process.env.NODE_ENV && process.env.NODE_ENV == 'production'
            ? version
            : '-DEVELOP-')
    }) }))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { version: state.Core.App.packageJson.version }));
const enhance = connect(mapStateToProps);
export default enhance(VersionNavigationItem);
//# sourceMappingURL=VersionNavigationItem.js.map