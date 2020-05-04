import React from 'react';
import International, { FormatMessage } from '../Component/International';

export type InjectedIntl = {
  formatMessage: FormatMessage;
}

export type InjectedIntlProps = {
  intl?: {
    formatMessage: FormatMessage;
  }
}

type ComponentType<T> = React.ComponentClass<T> | React.StatelessComponent<T>;

export const injectIntl = <T extends InjectedIntlProps>(
  Component: ComponentType<T>
): React.FC<T> => (ownProps: T) => (
  <International>
    {({ formatMessage }) => {
      const Connected = Component as React.FC<InjectedIntlProps>;
      const intl = { formatMessage };
      return <Connected intl={intl} {...ownProps}/>;
    }}
  </International>
);
