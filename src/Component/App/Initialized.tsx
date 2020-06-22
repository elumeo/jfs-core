import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Global from '../../Store/Reducer/Global';
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
  appInitialized
    ? (
      <HashRouter>
        <IntlProvider
          locale={language}
          messages={messages[language]}>
          <>
            {children}
          </>
        </IntlProvider>
      </HashRouter>
    )
    : (
      <div className="app-initialize-progress">
        <CircularProgress id="app-initialize-progress" scale={2}/>
      </div>
    )
);



const mapStateToProps = (
  state: Global.State,
  ownProps: IInitializedProps
): IInitializedProps => ({
  ...ownProps,
  language: state.Core.Language.language,
  appInitialized: state.Core.App.appInitialized,
  messages: state.Core.Language.messages
});

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(Initialized);
