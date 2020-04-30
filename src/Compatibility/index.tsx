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

type ComponentType = (
  React.ComponentClass<InjectedIntlProps> |
  React.StatelessComponent<InjectedIntlProps>
);

export const injectIntl = <T extends ComponentType>(
  Component: T
): React.FC => ({
  ...ownProps
}) => (
  <International>
    {({ formatMessage }) => {
      const Connected = Component as React.FC<InjectedIntlProps>;
      const intl = { formatMessage };
      return <Connected intl={intl} {...ownProps}/>;
    }}
  </International>
);
