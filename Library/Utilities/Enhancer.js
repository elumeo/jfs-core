import React from 'react';
import { connect } from 'react-redux';
const Enhancer = ({ actions, mapToState, children }) => {
    const Unconnected = (props) => {
        const { state, children } = props;
        const actions = {};
        for (const key in props) {
            actions[key] = props[key];
        }
        return (React.createElement(React.Fragment, null, children({ actions: actions, state })));
    };
    const enhance = connect((state) => ({
        state: mapToState(state)
    }), actions);
    const Connected = enhance(Unconnected);
    return (React.createElement(Connected, { actions: actions, mapToState: mapToState }, ({ state, actions }) => (React.createElement(React.Fragment, null, children({ state, actions })))));
};
export default Enhancer;
//# sourceMappingURL=Enhancer.js.map