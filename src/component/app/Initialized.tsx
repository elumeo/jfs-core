import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { compose } from 'redux';
import { connect } from 'react-redux';

import './Initialized.scss';

export interface IInitializedProps {
  language?: string;
  messages?: { [language: string]: { [key: string]: string } };
  appInitialized?: boolean;
}

const Initialized: React.FC<IInitializedProps> = ({
  language,
  messages,
  children,
  appInitialized
}) => (
  appInitialized && (
    <IntlProvider
      locale={language}
      messages={messages[language]}>
      <HashRouter>
        <>
          {children}
        </>
      </HashRouter>
    </IntlProvider>
  ) || (
    <div className="app-initialize-progress">
      <CircularProgress id="app-initialize-progress" scale={2}/>
    </div>
  )
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IInitializedProps
): IInitializedProps => ({
  ...ownProps,
  language: state.languageReducer.language,
  appInitialized: state.appReducer.appInitialized,
  messages: state.languageReducer.messages
})

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(Initialized);
