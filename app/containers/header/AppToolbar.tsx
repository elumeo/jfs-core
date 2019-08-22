import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import Button from 'react-md/lib/Buttons/Button';
import Config from '../../base/Config';

export interface IAppToolbarProps extends InjectedIntlProps {
  onToggleMenu: any;
}

const appToolbar: React.SFC<IAppToolbarProps> = ({
  intl: { formatMessage },
  onToggleMenu
}) => (
  <Toolbar
    title={formatMessage({ id: 'app.title' })}
    nav={<Button key="nav" icon onClick={onToggleMenu}>menu</Button>}
    colored
    fixed
  >
    <div className='system'>
      <p className='md-text'>{formatMessage({id: 'app.system'})}</p>
      <div className={Config.Language} />
    </div>
  </Toolbar>
)

export default injectIntl(appToolbar);
