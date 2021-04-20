import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from '../../../Types/Redux';
import { useIntl } from 'react-intl';
import Flag from './Flag';
const BackendIndicator = () => {
    const { formatMessage } = useIntl();
    const backendRegion = useSelector(state => state.Core.System.backendRegion);
    return (React.createElement(Tooltip, { title: `${formatMessage({ id: 'app.backend' })}: ${backendRegion}` },
        React.createElement("span", null,
            React.createElement(Flag, { country: (backendRegion || '').toLowerCase() }))));
};
export default BackendIndicator;
