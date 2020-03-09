import React from 'react';
import { connect } from 'react-redux';
import Toolbar from 'react-md/lib/Toolbars';

import { ICoreRootReducer } from '../../Store/Reducer';
import NavigationButton from './NavigationButton';

export interface INavigationDrawerHeaderProps {
  username?: string;
}

const NavigationDrawerHeader: React.FC<INavigationDrawerHeaderProps> = ({
  username
}) => (
  <Toolbar
    actions={<NavigationButton iconName="arrow_back"/>}
    className="md-divider-border md-divider-border--bottom"
    title={username ? username : ''}
  />
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationDrawerHeaderProps
): INavigationDrawerHeaderProps => ({
  ...ownProps,
  username: (
    state.sessionReducer.sessionDTO &&
    state.sessionReducer.sessionDTO.username
  )
});

const enhance = connect(mapStateToProps);

export default enhance(NavigationDrawerHeader);
