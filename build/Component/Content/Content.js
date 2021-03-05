import React from 'react';
import './_styles.scss';
import { useSelector } from '../../Types/Redux';
import { createStyles } from '@material-ui/core';
const styles = createStyles({
    'split-view': {
        width: '100%',
    },
});
const Content = ({ children }) => {
    const splitViewEnabled = useSelector(state => state.Core.SplitView.splitViewEnabled);
    const contentClassName = [
        `authorized-content`,
        splitViewEnabled ? 'split-view--active' : ''
    ].join(' ');
    return (React.createElement("div", { className: contentClassName }, children));
};
export default Content;
//# sourceMappingURL=Content.js.map