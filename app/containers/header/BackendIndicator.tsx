import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getRegion } from '../../store/action/SystemAction';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import { injectIntl, InjectedIntlProps } from 'react-intl';
// @ts-ignore
import { IRootReducer } from '../../../../../../src/store/reducer/Root';

export interface IBackendIndicatorProps extends InjectedIntlProps {
  getRegion?: any;
  backendRegion?: string;
}

export interface IBackendIndicatorState {

}

class BackendIndicator extends React.Component<IBackendIndicatorProps, IBackendIndicatorState> {
  constructor(props) {
    super(props);
    const { props: { getRegion } } = this;
    getRegion();
  }

  render() {
    const { props: { intl: { formatMessage }, backendRegion } } = this;
    return (
      <Tooltipped
        label={`${formatMessage({id: 'Backend'})}: ${backendRegion}`}>
        <div className='system'>
          <div className={(backendRegion || '').toLowerCase()}/>
        </div>
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
