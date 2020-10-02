import React from 'react';
import { injectIntl } from 'react-intl';
const International = ({ intl: { formatMessage }, children }) => (React.createElement(React.Fragment, null, children({ formatMessage })));
const enhance = injectIntl;
export default enhance(International);
//# sourceMappingURL=index.js.map