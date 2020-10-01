import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Global from 'Store/Reducer/Global';
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
  useLoader({ allowRobotLogin, translations, packageJson });
  const appInitialized = useSelector<Global.State, boolean>(
    state => state.Core.App.appInitialized
  );

  if (appInitialized) {
    return (
      <Initialized>
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
