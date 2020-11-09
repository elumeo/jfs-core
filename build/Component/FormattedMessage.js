import React from 'react';
import Translations from 'Utilities/Format/Translations';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
const FormattedMessage = ({ id, values, mapValues }) => {
    const mappedValues = mapValues && mapValues(values) || values;
    return (React.createElement("span", { dangerouslySetInnerHTML: {
            __html: Translations.formatMessage({ id }, Object.keys(mappedValues).reduce((markedUpValues, key) => (Object.assign(Object.assign({}, markedUpValues), { [key]: ReactDOMServer.renderToString(React.createElement(React.Fragment, null, mappedValues[key])) })), {}))
        } }));
};
const enhance = connect((state, ownProps) => (Object.assign(Object.assign({}, ownProps), { state: state.Core.Language })));
export default enhance(FormattedMessage);
//# sourceMappingURL=FormattedMessage.js.map