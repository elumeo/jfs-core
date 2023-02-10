import React from 'react';
import { IntlProvider } from 'react-intl';
import Style from './Style';
import Picker from './Picker';

export type Props = {
  locale: string;
  messages: Record<string, string>;
};

const Stateless: React.FC<React.PropsWithChildren<Props>> & { Style: typeof Style; } = ({ locale, messages, children }) => <IntlProvider
  locale={locale}
  messages={messages}>
  <Style>
    <Picker>
      {children}
    </Picker>
  </Style>
</IntlProvider>;

Stateless.Style = Style;

export default Stateless;
