import React from 'react';
import {Tooltip} from '@material-ui/core';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import Flag, { Country } from './Flag';

const BackendIndicator: React.FC = () => {
  const { formatMessage } = useIntl();
  const backendRegion = useSelector(state => state.Core.System.backendRegion);
  console.log({backendRegion});
  return (
    <Tooltip
      title={`${formatMessage({ id: 'app.backend' })}: ${backendRegion}`}>
      <Flag country={(backendRegion || '').toLowerCase() as Country}/>
    </Tooltip>
  );
}


export default BackendIndicator;
