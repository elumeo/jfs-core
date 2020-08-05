import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import Global from '../../Store/Reducer/Global';

import { openNavigation, closeNavigation } from '../../Store/Action/NavigationAction';

export interface INavigationButtonProps {
  navigationOpen?;
  openNavigation?: typeof openNavigation;
  closeNavigation?: typeof closeNavigation;
  iconName: string;
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
  state: Global.State,
  ownProps: INavigationButtonProps
): INavigationButtonProps => ({
  ...ownProps,
  ...state.Core.Navigation
});

const enhance = connect(mapStateToProps, {openNavigation, closeNavigation});

export default enhance(NavigationButton);
