import * as _ from 'lodash';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Button from 'react-md/lib/Buttons';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers';
import Toolbar from 'react-md/lib/Toolbars';
import { connect } from 'react-redux';
import JSCApi from '../../base/JscApi';
import { logoutAction } from '../../store/action/SessionAction';
import { IRootReducer } from '../../../../../src/store/reducer/Root';
import LogoutDialog from '../login/LogoutDialog';
import { createNavItems, INavItem } from './NavigationItems';
import { checkSessionAction } from '../../store/action/SessionAction';

import navigationItems from '../../../../../src/Navigation';

interface INavigationDrawerProps extends InjectedIntlProps {
  visible: boolean;
  position: DrawerPosition;
  closeDrawer: () => void;
  toggleDrawer: (visible: boolean) => void;
  // actions
  logoutAction?: () => void;
  // store props
  isAuthorized?: boolean;
  sessionDTO?: JSCApi.DTO.Session.ISessionDTO;
  history?: any;

  version: string;

  navigationItems: any;
}

interface INavigationDrawerState {
  dialogVisible?: boolean;
}

class NavigationDrawer extends React.Component<INavigationDrawerProps, INavigationDrawerState> {
  state: INavigationDrawerState = { dialogVisible: false };

  private getRawNavItems = (): INavItem[] => {
    const { intl: { formatMessage }, version, history } = this.props;
    return [
      ...navigationItems.map(navigationItem => ({
        ...navigationItem,
        onClick: () => {
          const { authorizedOnly, onClickRoute } = navigationItem;
          const { location: { pathname } } = history;
          authorizedOnly && checkSessionAction();
          pathname !== onClickRoute && history.push(onClickRoute);
        }
      })),
      {
        iconName: 'exit_to_app',
        messageId: 'app.logout',
        authorizedOnly: true,
        onClick: this.showDialog
      },
      {
        divider: true
      },
      {
        iconName: 'info_outline',
        messageId: 'app.version',
        messageString:
            process.env.NODE_ENV && process.env.NODE_ENV == 'production'
            ? formatMessage({ id: 'app.version' }, { versionNumber: version })
            : formatMessage({ id: 'app.version' }, { versionNumber: '-DEVELOP-' })
      }
    ];
  };

  private showDialog = (): void => {
    this.setState({ dialogVisible: true });
  };

  private closeDialog = (close: boolean): void => {
    if (close) {
      this.props.logoutAction();
      window.sessionStorage.logout = true;
      setTimeout(() => {
        window.sessionStorage.logout = false;
        this.props.history.push('/login');
      }, 500);
    }
    this.setState({ dialogVisible: false });
  };

  render() {
    const { getRawNavItems } = this;
    const {
      intl: { formatMessage }, isAuthorized,
      sessionDTO, visible, position, closeDrawer, toggleDrawer
    } = this.props;
    const { dialogVisible } = this.state;

    const close = (
      <Button icon onClick={closeDrawer}>
        arrow_back
      </Button>
    );
    const header = (
      <Toolbar
        actions={close}
        className="md-divider-border md-divider-border--bottom"
        title={sessionDTO ? sessionDTO.username : ''}
      />
    );

    return (
      <div>
        <Drawer
          visible={visible}
          position={position}
          navItems={createNavItems(getRawNavItems(), isAuthorized, formatMessage)}
          onVisibilityChange={toggleDrawer}
          header={header}
          type={Drawer.DrawerTypes.TEMPORARY}
          style={{ zIndex: 100 }}
          clickableDesktopOverlay
          overlay
        />
        <LogoutDialog visible={dialogVisible} closeDialog={this.closeDialog} />
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: INavigationDrawerProps): INavigationDrawerProps => {
  const { sessionReducer } = state;
  return _.assign({}, ownProps, sessionReducer);
};

export default withRouter(injectIntl(connect(mapStateToProps, { logoutAction }, null, {withRef: true})(NavigationDrawer)));
