import * as React from 'react';
import {InjectedIntlProps, injectIntl} from 'react-intl';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import Button from 'react-md/lib/Buttons/Button';
import Config from '../../base/Config';
import Tooltipped from "react-md/lib/Tooltips/Tooltipped";

export interface IAppToolbarProps extends InjectedIntlProps {
  onToggleMenu: any;
}

const remove = {prefix: (value, prefix) => value.substring(prefix.length, value.length)};
const guessBackendRegion = (url) => {
  for (const variant of ['http://', 'https://']) {
    if (url.substring(0, variant.length) === variant) {
      for (let part of remove.prefix(url, variant).split('.')) {
        switch (part.toLowerCase()) {
          case 'it':
          case 'ita':
            return 'it';
          case 'de':
          case 'uk':
            return part;
          default:
            // continue
        }
      }
      return 'de';
    }
  }
};
const backendRegion = guessBackendRegion(Config.Client.Host);

const appToolbar: React.FC<IAppToolbarProps> = ({
  intl: { formatMessage },
  onToggleMenu
}) => (
  <Toolbar
    title={formatMessage({ id: 'app.title' })}
    nav={<Button key="nav" icon onClick={onToggleMenu}>menu</Button>}
    colored
    fixed
  >
    <Tooltipped label={formatMessage({id: 'Backend'}) + ': ' + backendRegion.toUpperCase()}>
      <div className='system'>
        <div className={backendRegion}/>
      </div>
    </Tooltipped>
  </Toolbar>
);

export default injectIntl(appToolbar);
