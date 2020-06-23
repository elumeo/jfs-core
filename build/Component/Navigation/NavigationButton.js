import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import { openNavigation, closeNavigation } from '../../Store/Action/NavigationAction';
const NavigationButton = ({ navigationOpen, openNavigation, closeNavigation, iconName }) => (React.createElement(Button, { icon: true, onClick: () => (navigationOpen
        ? closeNavigation()
        : openNavigation()) }, iconName));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), state.Core.Navigation));
const enhance = connect(mapStateToProps, { openNavigation, closeNavigation });
export default enhance(NavigationButton);
//# sourceMappingURL=NavigationButton.js.map