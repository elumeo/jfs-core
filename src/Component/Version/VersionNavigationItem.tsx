import {useIntl} from "react-intl";
import * as Navigation from 'Component/Navigation';
import React from "react";
import useCore from "Effect/useCore";

const VersionNavigationItem: React.FC = () => {
  const {formatMessage} = useIntl();
  const {App: {packageJson: {version}}} = useCore()
  return <Navigation.Item
    iconName={'info_outlined'}
    messageString={formatMessage({id: 'app.version'}, {versionNumber: version})}
  />
}

export default React.memo(VersionNavigationItem);
