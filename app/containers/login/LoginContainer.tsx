import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { IRootReducer } from '../../../../../../src/store/reducer/Root';
import { checkLoginAction, ILoginType } from '../../store/action/SessionAction';
import { withRouter, Redirect } from 'react-router-dom';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';

import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';

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

  constructor(props: ILoginContainerProps) {
    super(props);
    if (Config.RobotUsername && Config.RobotPassword) {
      this.login();
    }
  }

  login = (): void => {
    const { checkLoginAction } = this.props;
    const { username, password } = this.state;
    checkLoginAction({ username, password });
  };

  render() {
    const { intl: { formatMessage }, isCheckingLogin, isAuthorized } = this.props;
    if (isAuthorized) return <Redirect to={{ pathname: '/start' }}/>
    return (
      <div className="md-grid">
        <div className="md-cell md-cell--12">
          <form>
            <Card style={{width: 330, margin: 'auto'}} raise={true}>
              <CardTitle title={formatMessage({id: 'login.title'})}/>
              <CardText>
                <LoginCredentials
                  onChangeUsername={update => this.setState({ username: update })}
                  onChangePassword={update => this.setState({ password: update })}
                  onLogin={() => this.login()}
                />
              </CardText>
              <CardActions className="md-divider-border md-divider-border--top">
                <LoginButton
                  isCheckingLogin={isCheckingLogin}
                  onLogin={() => this.login()}
                />
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
