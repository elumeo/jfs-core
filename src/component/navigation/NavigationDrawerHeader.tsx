import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import JSCApi from '../../JscApi';
import NavigationButton from './NavigationButton';

export interface INavigationDrawerHeaderProps {
  username?: string;
}

class NavigationDrawerHeader extends React.Component<INavigationDrawerHeaderProps> {
  render() {
    const { props: { username } } = this;
    return (
      <Toolbar
        actions={<NavigationButton iconName="arrow_back"/>}
        className="md-divider-border md-divider-border--bottom"
        title={username ? username : ''}
      />
    )
  }
}

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

const enhance = compose(
  connect(mapStateToProps),
  injectIntl
);

export default enhance(NavigationDrawerHeader);
