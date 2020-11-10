import React from 'react';
import './_styles.scss';
const JuweloFontIcon = ({ icon, error, light, style, className: customeClassName }) => {
    error = error === undefined ? false : error;
    light = light === undefined ? false : light;
    let className = 'juwelo-icon-font jif-' + icon;
    if (light) {
        className += ' -light';
    }
    if (error) {
        className += ' -error';
    }
    return (React.createElement("i", { style: style || {}, className: `${className} ${customeClassName || ''}` }));
};
export default JuweloFontIcon;
//# sourceMappingURL=index.js.map