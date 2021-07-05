import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useActions from '../../../Store/useActions';
import { useSelector } from '../../../Types/Redux';
const Button = () => {
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const { openNavigation, closeNavigation } = useActions();
    const toggle = React.useCallback(() => (navigationOpen
        ? closeNavigation()
        : openNavigation()), [navigationOpen]);
    return (React.createElement(IconButton, { onClick: toggle },
        React.createElement(ArrowBackIcon, { fontSize: 'small' })));
};
export default Button;
