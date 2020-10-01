import React from 'react';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
const Icon = ({ icon, error, isError, isSuccess }) => {
    let iconName = icon;
    iconName = (error || isError) && !icon ? 'error' : iconName;
    iconName = isSuccess && !icon ? 'check' : iconName;
    return (iconName
        ? (React.createElement(FontIcon, { className: 'icon md-text--inherit' }, iconName))
        : null);
};
export default Icon;
//# sourceMappingURL=Icon.js.map