import React from 'react';
import Stateless from './Stateless';
import Stateful, { Props as StatefulProps } from './Stateful';
import Title from './Title';

export type Props = StatefulProps & {
  allowRobotLogin?: boolean;
  translations: Record<string, Record<string, string>>;
  title?: string;
};

const App: React.FC<Props> = ({
  children,
  allowRobotLogin,
  translations,
  packageJSON,
  title,
  store,
}) => (
  <Stateless>
    <Title
      value={title || (packageJSON.name as string)}/>
    <Stateful
      store={store}
      allowRobotLogin={allowRobotLogin}
      packageJSON={packageJSON}
      translations={translations}>
      {children}
    </Stateful>
  </Stateless>
);

export default App;
