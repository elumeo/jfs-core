import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import Flag, { Country } from './Flag';

const BackendIndicator: React.FC = () => {
  const { formatMessage } = useIntl();
  const backendRegion = useSelector(state => state.Core.System.backendRegion);
  return (
    <Tooltip
      title={`${formatMessage({ id: 'app.backend' })}: ${backendRegion}`}>
      <span><Flag country={(backendRegion || '').toLowerCase() as Country}/></span>
    </Tooltip>
  );
};


export default BackendIndicator;
