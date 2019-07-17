import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields/TextField';

import { checkLoginAction, checkSessionAction } from '../../store/action/SessionAction';
import { IRootReducer } from '../../../../../../src/store/reducer/Root';

import './LoginDialog.scss';

interface ILoginDialogProps extends InjectedIntlProps {
  children?: any;
  isAuthorized?: boolean;
  checkLoginAction?: ({}) => void;
  checkSessionAction?: () => void;
}

interface ILoginDialogState {
  username?: any;
  password?: any;
}

class LoginDialog extends React.Component<ILoginDialogProps, ILoginDialogState> {
  state = { username: '', password: '' };

  componentWillMount() {
    this.props.checkSessionAction();
  }

  componentDidMount() {
    const { isAuthorized } = this.props;
    document
      .getElementsByClassName('md-grid')[0]
      .classList.add('blurred');
  }

  render() {
    const { intl: { formatMessage }, checkLoginAction, isAuthorized } = this.props;
    const { username, password } = this.state;

    const login = (username, password) => {
      checkLoginAction({ username, password });
      window.sessionStorage.loginReloaded = false;
    }

    const { loginReloaded, logout } = window.sessionStorage;

    const hidden = (
      (!JSON.parse(loginReloaded) || JSON.parse(logout)) &&
      (!JSON.parse(loginReloaded) && JSON.parse(logout))
    );

    const id = `modal-dialog-${Math.round(Math.random() * 1000)}`;
    return (
      <DialogContainer
        id={id}
        visible={true}
        title="Login"
        aria-describedby=""
        modal
        className={`login-dialog ${hidden ? 'hidden' : ''}`}
        actions={[
          {
            onClick: () => login(username, password),
            primary: true,
            label: formatMessage({ id: "app.login" }),
          }
        ]}
      >
        <TextField
          id="username"
          type="text"
          placeholder={formatMessage({id: 'login.username'})}
          required={true}
          errorText={formatMessage({id: 'login.username.errorText'})}
          value={username}
          onChange={username => this.setState({ username })}
        />
        <TextField
          id="password"
          type="password"
          placeholder={formatMessage({id: 'login.password'})}
          required={true}
          errorText={formatMessage({id: 'login.password.errorText'})}
          value={password}
          onChange={password => this.setState({ password })}
          onKeyUp={(e) => e.key === 'Enter' && login(username, password)}
        />
      </DialogContainer>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ILoginDialogProps): ILoginDialogProps => ({
  isAuthorized: state.sessionReducer.isAuthorized,
  ...ownProps
});

const mapDispatchToProps = { checkLoginAction, checkSessionAction };

const enhance: (component) => any = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
);

export default enhance(LoginDialog);
