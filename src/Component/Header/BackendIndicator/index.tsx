import React from 'react';
import * as MUI from '@material-ui/core';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import Flag, { Country } from './Flag';

const BackendIndicator: React.FC = () => {
  const { formatMessage } = useIntl();
  const backendRegion = useSelector(state => state.Core.System.backendRegion);
  return (
    <MUI.Tooltip
      title={`${formatMessage({ id: 'app.backend' })}: ${backendRegion}`}>
      <span><Flag country={(backendRegion || '').toLowerCase() as Country}/></span>
    </MUI.Tooltip>
  );
};


export default BackendIndicator;
