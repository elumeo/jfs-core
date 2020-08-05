import React from 'react';
import { connect } from 'react-redux';
import Toolbar from 'react-md/lib/Toolbars';

import Global from '../../Store/Reducer/Global';
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
    title={username ? username : ''}/>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: INavigationDrawerHeaderProps
): INavigationDrawerHeaderProps => ({
  ...ownProps,
  username: (
    state.Core.Session.sessionDTO &&
    state.Core.Session.sessionDTO.username
  )
});

const enhance = connect(mapStateToProps);

export default enhance(NavigationDrawerHeader);
