import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import './BackendIndicator.scss';
import IRootReducer from "../../store/reducer/RootReducer";

export interface IBackendIndicatorProps extends InjectedIntlProps {
  backendRegion?: string;
}

class BackendIndicator extends React.Component<IBackendIndicatorProps> {
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
  connect(mapStateToProps),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(BackendIndicator);
