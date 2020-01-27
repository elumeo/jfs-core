import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import { ICoreRootReducer } from '../../Store/Reducer/combineReducers';

import { openNavigation, closeNavigation } from '../../Store/Action/NavigationAction';
import { injectIntl } from 'react-intl';

export interface INavigationButtonProps {
  navigationOpen?;
  openNavigation?: typeof openNavigation;
  closeNavigation?: typeof closeNavigation;
  iconName: string;
}

export interface INavigationButtonState {

}

const NavigationButton: React.FC<INavigationButtonProps> = ({
  navigationOpen,
  openNavigation,
  closeNavigation,
  iconName
}) => (
  <Button icon onClick={() => (
    navigationOpen
      ? closeNavigation()
      : openNavigation()
  )}>
    {iconName}
  </Button>
)

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationButtonProps
): INavigationButtonProps => ({
  ...ownProps,
  ...state.navigationReducer
});

const enhance = compose(
  connect(mapStateToProps, {openNavigation, closeNavigation}),
  injectIntl
);

export default enhance(NavigationButton);
