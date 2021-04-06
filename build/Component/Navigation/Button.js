import React from 'react';
import * as MUI from '@material-ui/core';
import useActions from '../../Store/useActions';
import { useSelector } from '../../Types/Redux';
const Button = ({ iconName }) => {
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const { openNavigation, closeNavigation } = useActions();
    return (React.createElement(MUI.IconButton, { onClick: () => (navigationOpen
            ? closeNavigation()
            : openNavigation()) },
        React.createElement(MUI.Icon, { fontSize: "small" }, iconName)));
};
export default Button;
//# sourceMappingURL=Button.js.map