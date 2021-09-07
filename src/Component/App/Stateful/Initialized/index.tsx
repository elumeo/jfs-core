import React from 'react';
import useActions from 'Store/useActions';
import useSelector from 'Store/useSelector';
import Progress from './Progress';

export type Props = {
  allowRobotLogin: boolean;
  packageJSON: Record<string, unknown>;
  translations: Record<string, Record<string, string>>;
};

const Initialized: React.FC<Props> = ({
  allowRobotLogin, packageJSON, translations, children
}) => {
  const initialized = useSelector(state => state.Core.App.appInitialized);

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
    initialized
      ? <>{children}</>
      : <Progress/>
  );
}

export default Initialized;