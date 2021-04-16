import React from 'react';
import { Icon as FontIcon } from '@material-ui/core';
const Icon = ({ variant }) => {
    const iconName = React.useMemo(() => {
        if (variant === 'error') {
            return 'cancel';
        }
        else if (variant === 'default') {
            return 'alert';
        }
        else if (variant === 'success') {
            return 'check';
        }
        else {
            return variant;
        }
    }, [variant]);
    return (iconName
        ? (React.createElement(FontIcon, { color: 'inherit' }, iconName))
        : null);
};
export default Icon;
