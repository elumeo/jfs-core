import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import './AppToolbar.scss';

import NavigationButton from '../navigation/NavigationButton';

export interface IAppToolbarProps extends InjectedIntlProps {
  LeftTools;
  RightTools;
}

const AppToolbar: React.FC<IAppToolbarProps> = ({
  intl: {formatMessage},
  LeftTools,
  RightTools
}) => (
  <Toolbar
    title={formatMessage({id: 'app.title'})}
    nav={<NavigationButton iconName="menu"/>}
    colored
    fixed
  >
    <div className="tools">
      <div className="left-tools md-btn--toolbar">
        <LeftTools/>
      </div>
      <div className="right-tools md-btn--toolbar">
        <RightTools/>
      </div>
    </div>
  </Toolbar>
);

export default injectIntl(AppToolbar);
