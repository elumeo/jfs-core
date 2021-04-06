import React from 'react';
import * as MUI from '@material-ui/core';
const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const Progress = () => (React.createElement("div", { style: style },
    React.createElement(MUI.CircularProgress, { id: 'app-initialize-progress' })));
export default Progress;
//# sourceMappingURL=Progress.js.map