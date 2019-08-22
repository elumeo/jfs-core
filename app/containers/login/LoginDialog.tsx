import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { checkLoginAction, checkSessionAction } from '../../store/action/SessionAction';
import { IRootReducer } from '../../../../../../src/store/reducer/Root';
import './LoginDialog.scss';

interface ILoginDialogProps extends InjectedIntlProps {
  children?: any;
  isAuthorized?: boolean;
  checkLoginAction?: ({}) => void;
  checkSessionAction?: () => void;
  isCheckingLogin?: boolean;
}

interface ILoginDialogState {
  username?: any;
  password?: any;
}

class LoginDialog extends React.Component<ILoginDialogProps, ILoginDialogState> {
  state = { username: '', password: '' };

  login = () => {
    const { props: { checkLoginAction }, state: { username, password } } = this;
    checkLoginAction({ username, password });
    setTimeout(() => location.reload(), 1000);
  }

  render() {
    const {
      props: {
        intl: { formatMessage },
        checkLoginAction, isAuthorized, isCheckingLogin
      },
      login
    } = this;

    return (
      <div className="login-dialog">
        <DialogContainer
          id={'login-dialog'}
          visible={true}
          title="Login"
          aria-describedby=""
          modal
        >
          <LoginCredentials
            onChangeUsername={update => this.setState({ username: update })}
            onChangePassword={update => this.setState({ password: update })}
            onLogin={login}
          />
          <LoginButton
            isCheckingLogin={isCheckingLogin}
            onLogin={login}
          />
        </DialogContainer>
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ILoginDialogProps): ILoginDialogProps => ({
  isAuthorized: state.sessionReducer.isAuthorized,
  isCheckingLogin: state.sessionReducer.isCheckingLogin,
  ...ownProps
});

const mapDispatchToProps = { checkLoginAction, checkSessionAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
);

export default enhance(LoginDialog);
