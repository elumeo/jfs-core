import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
const NavigationButton = ({ iconName }) => {
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const { openNavigation, closeNavigation } = useActions();
    return (React.createElement(Button, { icon: true, onClick: () => (navigationOpen
            ? closeNavigation()
            : openNavigation()) }, iconName));
};
export default NavigationButton;
//# sourceMappingURL=NavigationButton.js.map