import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useActions from 'Store/useActions';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export type Props = {
  allowRobotLogin: boolean;
  packageJSON: Record<string, unknown>;
  translations: Record<string, Record<string, string>>;
};

const Initializer: React.FC<Props> = ({
  allowRobotLogin, packageJSON, translations
}) => {
  const { initializeApp } = useActions();

  React.useEffect(
    () => {
      initializeApp({
        allowRobotLogin,
        packageJson: packageJSON,
        translations
      });
    },
    []
  );

  return (
    <div style={style}>
      <CircularProgress />
    </div>
  );
}

export default Initializer;
