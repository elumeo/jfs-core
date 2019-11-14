import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';

import { openNavigation, closeNavigation } from '../../store/action/NavigationAction';
import { injectIntl } from 'react-intl';

export interface INavigationButtonProps {
  navigationOpen?;
  openNavigation?: typeof openNavigation;
  closeNavigation?: typeof closeNavigation;
  iconName: string;
}

export interface INavigationButtonState {

}

class NavigationButton extends React.Component<INavigationButtonProps, INavigationButtonState> {
  render() {
    const {
      props: { navigationOpen, openNavigation, closeNavigation, iconName }
    } = this;
    return (
      <Button icon onClick={() => (
        navigationOpen
          ? closeNavigation()
          : openNavigation()
      )}>
        {iconName}
      </Button>
    )
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationButtonProps
): INavigationButtonProps => ({
  ...ownProps,
  ...state.navigationReducer
});

const enhance = compose(
  connect(mapStateToProps, { openNavigation, closeNavigation }),
  injectIntl
);

export default enhance(NavigationButton);
