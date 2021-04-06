import React from 'react';
import * as Icon from '../../Icon';
const Flag = React.forwardRef(({ country }, ref) => {
    const CountryIcon = Icon.Flag[country.toUpperCase()];
    return (React.createElement("div", { ref: ref, style: {
            width: 28,
            height: 28,
            position: 'relative',
            margin: 10
        } }, CountryIcon && React.createElement(CountryIcon, null)));
});
export default Flag;
//# sourceMappingURL=Flag.js.map