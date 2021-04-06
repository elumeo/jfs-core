import React from 'react';
import FlagURL from './FlagURL.json';
const Flag = ({ country }) => {
    const url = FlagURL[country];
    return (React.createElement("div", { style: {
            width: 28,
            height: 28,
            position: 'relative',
            margin: 10,
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url('${url}')`
        } }));
};
export default Flag;
//# sourceMappingURL=Flag.js.map