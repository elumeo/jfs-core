import React from 'react';
import { Icon as FontIcon } from '@material-ui/core';
const Icon = ({ icon, error, isError, isWarning, isSuccess }) => {
    let iconName = icon;
    iconName = (error || isError) && !icon ? 'error' : iconName;
    iconName = isWarning && !icon ? 'warning' : iconName;
    iconName = isSuccess && !icon ? 'check' : iconName;
    return (iconName
        ? (React.createElement(FontIcon, { className: 'icon md-text--inherit' }, iconName))
        : null);
};
export default Icon;
//# sourceMappingURL=Icon.js.map