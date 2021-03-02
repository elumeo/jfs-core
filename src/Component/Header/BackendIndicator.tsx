import React from 'react';
import {Tooltip} from '@material-ui/core';
import './BackendIndicator.scss';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Global from 'Store/Reducer/Global';

const BackendIndicator: React.FC = () => {
  const {formatMessage} = useIntl()
  const backendRegion = useSelector<Global.State,string>(
    state => state.Core.System.backendRegion
  );
  const label: string = [
    formatMessage({ id: 'app.backend' }),
    backendRegion
  ].join(': ');
  return (
    <Tooltip
      title={label}>
      <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
    </Tooltip>
  );
}


export default BackendIndicator;
