import React from 'react';
import Loader from './Loader';
import HOC, { Props as HOCProps } from './HOC';

export type Props = HOCProps & {
  allowRobotLogin?: boolean;
  translations: {
    [language: string]: {
      [key: string]: string;
    };
  };
  packageJson: Record<string, unknown>;
  title?: string;
};

const App: React.FC<Props> = ({
  children,
  allowRobotLogin,
  translations,
  packageJson,
  title,
  store,
}) => (
  <HOC title={title || (packageJson.name as string)} store={store}>
    <Loader
      allowRobotLogin={allowRobotLogin}
      translations={translations}
      packageJson={packageJson}>
      {children}
    </Loader>
  </HOC>
);

export default App;
