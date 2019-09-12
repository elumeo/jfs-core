import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { checkSessionAction } from '../../store/action/SessionAction';
import { IRootReducer } from '../../store/reducer/RootReducer';
import LoginDialog from './LoginDialog';

export interface ILoginPopupContainerProps {
  isAuthorized?: boolean;
  isCheckingSession?: boolean;
  checkSessionAction?: () => void;
}

export interface ILoginPopupContainerState {}

class LoginPopupContainer extends React.Component<ILoginPopupContainerProps, ILoginPopupContainerState>
{
  public state = {};

  constructor(props) {
    super(props);
    const { checkSessionAction } = this.props;
    checkSessionAction();
  }

  render() {
    const { children, isAuthorized } = this.props;

    return (
      <>
        {!isAuthorized && <LoginDialog/>}
        <div className={`authorized-content ${isAuthorized ? '' : 'hidden'}`}>
          {children}
        </div>
      </>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ILoginPopupContainerProps): ILoginPopupContainerProps => ({
  isAuthorized: state.sessionReducer.isAuthorized,
  isCheckingSession: state.sessionReducer.isCheckingSession,
  ...ownProps
});

const mapDispatchToProps = { checkSessionAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(LoginPopupContainer);
