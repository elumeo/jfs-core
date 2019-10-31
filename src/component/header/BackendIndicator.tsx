import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getRegion } from '../../store/action/SystemAction';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import { InjectedIntlProps, injectIntl } from 'react-intl';
// @ts-ignore
import { IRootReducer } from '../../../../../../src/store/reducer/Root';

import './BackendIndicator.scss';

export interface IBackendIndicatorProps extends InjectedIntlProps {
  getRegion?: any;
  backendRegion?: string;
}

class BackendIndicator extends React.Component<IBackendIndicatorProps> {
  constructor(props) {
    super(props);
    const { props: { getRegion } } = this;
    getRegion();
  }

  render() {
    const { props: { intl: { formatMessage }, backendRegion } } = this;
    return (
      <Tooltipped label={`${formatMessage({ id: 'app.backend' })}: ${backendRegion}`}>
        <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
      </Tooltipped>
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IBackendIndicatorProps) => ({
  ...ownProps,
  ...state.systemReducer
});

const enhance = compose(
  connect(mapStateToProps, { getRegion }),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(BackendIndicator);
