import React from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import useLoader from './useLoader';
import Initialized from './Initialized';

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


  if (appInitialized && translations) {
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
          scale={2}/>
      </div>
    );
  }
}

export default Loader;
