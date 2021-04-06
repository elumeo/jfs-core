import React from 'react';
import { useSelector } from 'Types/Redux';
import Indicator from './Status/Indicator';

const JscWebSocketStatus: React.FC = () => {
  const config = useSelector(state => state.Core.Configuration.config);
  return (
    <div>
      <Indicator client={config.JscWebSocketClient}/>
      <Indicator client={config.JfsWebSocketClient}/>
    </div>
  );
}


export default JscWebSocketStatus;
