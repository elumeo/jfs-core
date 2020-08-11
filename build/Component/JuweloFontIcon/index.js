import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
const JuweloFontIcon = ({ icon, error, light }) => {
    error = error === undefined ? false : error;
    light = light === undefined ? false : light;
    let className = 'juwelo-icon-font jif-' + icon;
    if (light) {
        className += ' -light';
    }
    if (error) {
        className += ' -error';
    }
    return React.createElement("i", { className: className });
};
const mapStateToProps = (_state, props) => (Object.assign({}, props));
export default (connect(mapStateToProps, {}, null, { forwardRef: true })(JuweloFontIcon));
//# sourceMappingURL=index.js.map