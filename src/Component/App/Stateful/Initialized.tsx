import React from 'react';
import useSelector from 'Store/useSelector';

const Initialized: React.FC = ({ children }) => {
  const initialized = useSelector(state => state.Core.App.appInitialized);
  return (
    initialized &&
    <>{children}</>
  );
}

export default Initialized;