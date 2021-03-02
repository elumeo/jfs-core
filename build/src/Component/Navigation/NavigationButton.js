import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
const NavigationButton = ({ iconName }) => {
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const { openNavigation, closeNavigation } = useActions();
    return (React.createElement(IconButton, { onClick: () => (navigationOpen
            ? closeNavigation()
            : openNavigation()) },
        React.createElement(Icon, { fontSize: "small" }, iconName)));
};
export default NavigationButton;
//# sourceMappingURL=NavigationButton.js.map