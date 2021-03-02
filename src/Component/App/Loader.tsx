import React from 'react';
import {CircularProgress} from '@material-ui/core';
import useLoader from './useLoader';
import Initialized from './Initialized';
import { isEmpty } from 'lodash';

export type Props = {
  allowRobotLogin: boolean;
  translations: { [language: string]: { [key: string]: string } };
  packageJson: object;
}

const Loader: React.FC<Props> = ({
  allowRobotLogin, translations, packageJson, children
}) => {
  const { appInitialized, language } = useLoader({
    allowRobotLogin,
    translations,
    packageJson
  });


  if (appInitialized && !isEmpty(translations)) {
    console.log('hier noch?',{appInitialized, translations, children, language})
    return (
      <Initialized translations={translations} language={language}>
        {children}
      </Initialized>
    );
  }
  else {
    return (
      <div className='app-initialize-progress'>
        <CircularProgress
          id='app-initialize-progress'
          />
      </div>
    );
  }
}

export default Loader;
