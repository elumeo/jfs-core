import * as React from 'react';
import NavigationDrawer from '../navigation/NavigationDrawer';
import AppToolbar from './AppToolbar';

export interface IAppHeaderProps {
}

export interface IAppHeaderState {
  navigationVisible: boolean;
}

export default class AppHeader extends React.Component<IAppHeaderProps, IAppHeaderState> {
  state = { navigationVisible: false };
  render() {
    const { state: { navigationVisible } } = this;
    return (
      <div className="app-header">
        <AppToolbar onToggleMenu={() =>
            this.setState({ navigationVisible: true })} />
        <NavigationDrawer
          visible={navigationVisible}
          position="left"
          closeDrawer={() => this.setState({ navigationVisible: false })}
          toggleDrawer={() => this.setState({ navigationVisible: !navigationVisible })}
        />
      </div>
    )
  }
}
