import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { compose } from 'redux';
import { connect } from 'react-redux';
import './_styles.scss';
const Initialized = ({ language, messages, children, appInitialized }) => (appInitialized
    ? (React.createElement(HashRouter, null,
        React.createElement(IntlProvider, { locale: language, messages: messages[language] },
            React.createElement(React.Fragment, null, children))))
    : (React.createElement("div", { className: "app-initialize-progress" },
        React.createElement(CircularProgress, { id: "app-initialize-progress", scale: 2 }))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { language: state.Core.Language.language, appInitialized: state.Core.App.appInitialized, messages: state.Core.Language.messages }));
const enhance = compose(connect(mapStateToProps));
export default enhance(Initialized);
//# sourceMappingURL=Initialized.js.map
