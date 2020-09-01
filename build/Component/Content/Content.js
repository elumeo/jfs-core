import React from 'react';
import { connect } from 'react-redux';
import './_styles.scss';
const Content = ({ children, splitViewEnabled }) => {
    const contentClassName = [
        `authorized-content`,
        splitViewEnabled ? 'split-view--active' : ''
    ].join(' ');
    return (React.createElement("div", { className: contentClassName }, children));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.SplitView), ownProps));
const enhance = connect(mapStateToProps);
export default enhance(Content);
//# sourceMappingURL=Content.js.map