import React from 'react';
import useSelector from 'Store/useSelector';

type Props = {
  children: React.ReactNode;
}

const Uninitialized = ({ children }: Props) => {
  const initialized = useSelector(state => state.Core.App.appInitialized);
  return (
    !initialized &&
    <>{children}</>
  );
}

export default Uninitialized;
