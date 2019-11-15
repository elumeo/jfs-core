import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import './BackendIndicator.scss';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';

export interface IBackendIndicatorProps extends InjectedIntlProps {
  backendRegion?: string;
}

class BackendIndicator extends React.Component<IBackendIndicatorProps> {
  render() {
    const {props: {intl: {formatMessage}, backendRegion}} = this;
    return (
      <Tooltipped
        label={`${formatMessage({id: 'app.backend'})}: ${backendRegion}`}>
        <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
      </Tooltipped>
    )
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IBackendIndicatorProps
): IBackendIndicatorProps => ({
  ...ownProps,
  ...state.systemReducer
});

const enhance = compose(
  connect(mapStateToProps),
  injectIntl
);

export default enhance(BackendIndicator);
