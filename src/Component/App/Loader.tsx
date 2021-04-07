import React from 'react';
import useLoader from './useLoader';
import Initialized from './Initialized';
import { isEmpty } from 'lodash';
import Progress from './Progress';

export type Props = {
  allowRobotLogin: boolean;
  translations: {
    [language: string]: {
      [key: string]: string
    };
  };
  packageJson: any;
};

const Loader: React.FC<Props> = ({
  allowRobotLogin, translations, packageJson, children
}) => {
  const { appInitialized, language } = useLoader({
    allowRobotLogin,
    translations,
    packageJson
  });


  return (
    appInitialized && !isEmpty(translations)
      ? (
        <Initialized
          translations={translations}
          language={language}>
          {children}
        </Initialized>
      )
      : <Progress/>
  );
}

export default Loader;
