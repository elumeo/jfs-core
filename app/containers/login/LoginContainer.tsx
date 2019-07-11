import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import TextField from 'react-md/lib/TextFields';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { IRootReducer } from '../../../../../src/store/reducer/Root';
import { checkLoginAction, ILoginType } from '../../store/action/SessionAction';
import { withRouter, Redirect } from 'react-router-dom';

import Config from '../../base/Config';

// props & state ---------------------------------------------------------------
interface ILoginContainerProps extends InjectedIntlProps {
  checkLoginAction: (payload: ILoginType) => void;
  isAuthorized?: boolean;
  isCheckingLogin?: boolean;
  location?: any;
}

interface ILoginContainerState {
  username?: string;
  password?: string;
}

// component -------------------------------------------------------------------
class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {
  state = {
    username: Config.RobotUsername ? Config.RobotUsername : null,
    password: Config.RobotPassword ? Config.RobotPassword : null
  };

  private usernameTFRef;

  public constructor(props: ILoginContainerProps) {
    super(props);
    this.usernameTFRef = React.createRef();
  }

  componentDidMount() {
    if (this.usernameTFRef.current) {
      this.usernameTFRef.current.focus();
    }

    if (Config.RobotUsername && Config.RobotPassword) {
      this.login();
    }
  }

  onUsernameChange = (username: string, e: Event): void => {
    this.setState({ username });
  };

  onPasswordChange = (password: string, e: Event): void => {
    this.setState({ password });
  };

  login = (): void => {
    const { checkLoginAction } = this.props;
    const { username, password } = this.state;
    checkLoginAction({ username, password });
  };

  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode == 13) {
      this.login();
    }
  };

  render() {
    const {
      intl: { formatMessage },
      isCheckingLogin, isAuthorized
    } = this.props;

    if (isAuthorized) return <Redirect to={{ pathname: '/start' }}/>
    return (
      <div className="md-grid">
        <div className="md-cell md-cell--12">
          <form>
            <Card style={{width: 330, margin: 'auto'}} raise={true}>
              <CardTitle title={formatMessage({id: 'login.title'})}/>
              <CardText>
                <TextField
                  id="username"
                  type="text"
                  ref={this.usernameTFRef}
                  placeholder={formatMessage({id: 'login.username'})}
                  required={true}
                  errorText={formatMessage({id: 'login.username.errorText'})}
                  onChange={this.onUsernameChange}
                />
                <TextField
                  id="password"
                  type="password"
                  placeholder={formatMessage({id: 'login.password'})}
                  required={true}
                  errorText={formatMessage({id: 'login.password.errorText'})}
                  onChange={this.onPasswordChange}
                  onKeyUp={this.onKeyUp}
                />
              </CardText>
              <CardActions
                className="md-divider-border md-divider-border--top"
              >
                {isCheckingLogin
                  ? <CircularProgress
                      id="loginIsCheckingSpinner2"
                      style={{marginLeft: 'auto'}}
                    />
                  : <Button
                      children={formatMessage({id: 'login.button'})}
                      primary
                      flat
                      onClick={this.login}
                      style={{marginLeft: 'auto'}}
                    />}
              </CardActions>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ILoginContainerProps) => {
  const {sessionReducer} = state;
  return {...ownProps, ...sessionReducer};
};

export default withRouter(injectIntl(connect(mapStateToProps, {checkLoginAction})(LoginContainer)));
