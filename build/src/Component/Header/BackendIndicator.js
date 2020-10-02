import React from 'react';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import './BackendIndicator.scss';
import { injectIntl } from 'react-intl';
import { useSelector } from '../../../Types/Redux';
const BackendIndicator = ({ intl }) => {
    const backendRegion = useSelector(state => state.Core.System.backendRegion);
    const label = [
        intl.formatMessage({ id: 'app.backend' }),
        backendRegion
    ].join(': ');
    return (React.createElement(Tooltipped, { label: label },
        React.createElement("div", { className: `flag ${(backendRegion || '').toLowerCase()}` })));
};
const enhance = injectIntl;
export default enhance(BackendIndicator);
//# sourceMappingURL=BackendIndicator.js.map