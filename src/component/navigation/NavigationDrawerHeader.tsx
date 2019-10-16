import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars';

import IRootReducer from '../../store/reducer/RootReducer';
import JSCApi from '../../JscApi';
import NavigationButton from './NavigationButton';

export interface INavigationDrawerHeaderProps {
  sessionDTO?: JSCApi.DTO.Session.ISessionDTO;
}

class NavigationDrawerHeader extends React.Component<INavigationDrawerHeaderProps> {
  render() {
    const { props: { sessionDTO } } = this;
    return (
      <Toolbar
        actions={<NavigationButton iconName="arrow_back"/>}
        className="md-divider-border md-divider-border--bottom"
        title={sessionDTO ? sessionDTO.username : ''}
      />
    )
  }
}

const mapStateToProps = (
  state: IRootReducer,
  ownProps: INavigationDrawerHeaderProps
) => ({
  ...ownProps,
  sessionDTO: state.sessionReducer.sessionDTO
})

const enhance = compose(
  connect(mapStateToProps),
  injectIntl
);

export default enhance(NavigationDrawerHeader);
