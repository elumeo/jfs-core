import React from 'react';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import './AppToolbar.scss';

import NavigationButton from '../Navigation/NavigationButton';

import International from '../International';

export interface IAppToolbarProps {
  LeftTools: () => JSX.Element;
  RightTools: () => JSX.Element;
}

const AppToolbar: React.FC<IAppToolbarProps> = ({
  LeftTools,
  RightTools
}) => (
  <International>
    {({ formatMessage }) => (
      <Toolbar
        title={formatMessage({id: 'app.title'})}
        nav={<NavigationButton iconName="menu"/>}
        colored
        fixed>
        <div className="tools">
          <div className="left-tools md-btn--toolbar">
            <LeftTools/>
          </div>
          <div className="right-tools md-btn--toolbar">
            <RightTools/>
          </div>
        </div>
      </Toolbar>
    )}
  </International>
);

export default AppToolbar;
