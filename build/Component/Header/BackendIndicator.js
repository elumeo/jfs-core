import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import './BackendIndicator.scss';
import International from '../International';
const BackendIndicator = ({ backendRegion }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Tooltipped, { label: `${formatMessage({ id: 'app.backend' })}: ${backendRegion}` },
    React.createElement("div", { className: `flag ${(backendRegion || '').toLowerCase()}` })))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), state.Core.System));
const enhance = compose(connect(mapStateToProps));
export default enhance(BackendIndicator);
//# sourceMappingURL=BackendIndicator.js.map