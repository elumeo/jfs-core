import React from 'react';
import Loader from './Loader';
// import { ConnectedRouter } from 'connected-react-router';
import HOC, { Props as HOCProps } from './HOC';

export type Props = HOCProps & {
  allowRobotLogin?: boolean;
  translations: {
    [language: string]: {
      [key: string]: string
    };
  };
  packageJson: object;
}

const App: React.FC<Props> = ({
  children,
  allowRobotLogin,
  translations,
  packageJson,
  ...props
}) => (
  <HOC {...props}>
    <Loader
      allowRobotLogin={allowRobotLogin}
      translations={translations}
      packageJson={packageJson}>
      {children}
    </Loader>
  </HOC>
);

export default App;
