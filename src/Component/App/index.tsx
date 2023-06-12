import React from 'react';
import Stateless from './Stateless';
import Stateful, { Props as StatefulProps } from './Stateful';
import Title from './Title';
import moment from 'moment';

Date.prototype.toJSON = function () {
  return moment(this).format();
};

export type Props = StatefulProps & {
  packageJSON: Record<string, unknown>;
  translations: Record<string, Record<string, string>>;
  title?: string;
};

const App: React.FC<Props> =
  ({
     children,
     translations,
     packageJSON,
     title,
     store,
   }) => (
    <Stateful store={store}>
      <Title value={title || (packageJSON.name as string)}/>
      <Stateful.Initialized>
        <Stateful.International translations={translations}>
          {({ locale }) => (
            <Stateless locale={locale} messages={translations[locale]}>
              <Stateful.Snackbar>
                {children}
              </Stateful.Snackbar>
            </Stateless>
          )}
        </Stateful.International>
      </Stateful.Initialized>
      <Stateful.Uninitialized>
        <Stateless.Style>
          <Stateful.Initializer
            packageJSON={packageJSON}
            translations={translations}/>
        </Stateless.Style>
      </Stateful.Uninitialized>
    </Stateful>
  );

export default App;
