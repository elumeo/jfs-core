import React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';

const International: React.FC<{
  intl?: InjectedIntl;
  children: (
    internationalChildrenProps: {
      formatMessage: InjectedIntl['formatMessage'];
    }
  ) => JSX.Element;
}> = ({
  intl: { formatMessage },
  children
}) => (
  <>
    {children({ formatMessage })}
  </>
);

const enhance = injectIntl;

export default enhance(International);
