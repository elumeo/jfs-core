import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
const JuweloFontIcon = ({ icon }) => {
    const className = 'juwelo-icon-font jif-' + icon;
    return React.createElement("i", { className: className });
};
const mapStateToProps = (_state, props) => (Object.assign({}, props));
export default (connect(mapStateToProps, {}, null, { withRef: true })(JuweloFontIcon));
//# sourceMappingURL=index.js.map