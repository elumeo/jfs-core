import React from 'react';
import { Tooltip } from '@material-ui/core';
import './BackendIndicator.scss';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
const BackendIndicator = () => {
    const { formatMessage } = useIntl();
    const backendRegion = useSelector(state => state.Core.System.backendRegion);
    const label = [
        formatMessage({ id: 'app.backend' }),
        backendRegion
    ].join(': ');
    return (React.createElement(Tooltip, { title: label },
        React.createElement("div", { className: `flag ${(backendRegion || '').toLowerCase()}` })));
};
export default BackendIndicator;
//# sourceMappingURL=BackendIndicator.js.map