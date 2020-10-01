import React from 'react';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import './BackendIndicator.scss';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { useSelector } from 'Types/Redux';

const BackendIndicator: React.FC<InjectedIntlProps> = ({ intl }) => {
  const backendRegion = useSelector<string>(
    state => state.Core.System.backendRegion
  );
  const label = [
    intl.formatMessage({ id: 'app.backend' }),
    backendRegion
  ].join(': ');
  return (
    <Tooltipped
      label={label}>
      <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
    </Tooltipped>
  );
}

const enhance = injectIntl;

export default enhance(BackendIndicator);
