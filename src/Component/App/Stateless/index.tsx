import React from 'react';
import { IntlProvider } from 'react-intl';
import Style from './Style';
import Picker, { Props as PickerProps } from './Picker';

export type Props = {
  children: PickerProps['children'];
  locale: string;
  messages: Record<string, string>;
};

const Stateless: React.FC<Props> & { Style: typeof Style; } = ({ locale, messages, children }) => <IntlProvider
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
