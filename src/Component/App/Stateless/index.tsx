import React from 'react';
import { IntlProvider, IntlConfig } from 'react-intl';
import Style from './Style';
import Picker from './Picker';

export type Props = React.PropsWithChildren<IntlConfig>

const Stateless: React.FC<React.PropsWithChildren<Props>> & { Style: typeof Style; } = ({locale, children, ...intlProviderProps }) =>
  <IntlProvider locale={locale} {...intlProviderProps}>
    <Style>
      <Picker locale={locale}>
        {children}
      </Picker>
    </Style>
  </IntlProvider>;

Stateless.Style = Style;

export default Stateless;
