import * as React from 'react';
import AppHeader from '../header/AppHeader';
import AppSnackbar from '../snackbar/AppSnackbar';

import './Frame.scss';
import { IRootReducer } from "../../store/reducer/RootReducer";
import { connect } from "react-redux";

export interface IFrameProps {
  notificationDrawerVisible?: boolean;
  notificationDrawerPinned?: boolean;
}

class Frame extends React.Component<IFrameProps> {
  render () {
    const { children, notificationDrawerVisible, notificationDrawerPinned } = this.props;
    const splitViewClass = notificationDrawerVisible && notificationDrawerPinned ? 'app-frame--split-view' : '';
    const drawerVisibleClass = notificationDrawerVisible ? 'notification-drawer--visible' : '';
    return (
      <div className={`app-frame ${splitViewClass} ${drawerVisibleClass}`}>
        <AppHeader/>
        {children}
        <AppSnackbar/>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IFrameProps) => ({
  ...state.notificationReducer,
  ...ownProps
});

export default connect(mapStateToProps)(Frame)