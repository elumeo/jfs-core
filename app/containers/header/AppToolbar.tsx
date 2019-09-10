import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import Button from 'react-md/lib/Buttons/Button';
// @ts-ignore
import { leftTools, rightTools } from '../../../../../../src/HeaderTools';
import './AppToolbar.scss';

export interface IAppToolbarProps extends InjectedIntlProps {
  onToggleMenu: any;
}

const AppToolbar: React.FC<IAppToolbarProps> = ({
  intl: { formatMessage },
  onToggleMenu
}) => (
  <Toolbar
    title={formatMessage({ id: 'app.title' })}
    nav={<Button key="nav" icon onClick={onToggleMenu}>menu</Button>}
    colored
    fixed
  >
    <div className="tools">
      <div className="left-tools">
        {leftTools.map((tool, index) => (
          <div className="tool" key={`left-tool-${index}`}>
            {tool}
          </div>
        ))}
      </div>
      <div className="right-tools">
        {rightTools.map((tool, index) => (
          <div className="tool" key={`right-tool-${index}`}>
            {tool}
          </div>
        ))}
      </div>
    </div>
  </Toolbar>
);

export default injectIntl(AppToolbar);
