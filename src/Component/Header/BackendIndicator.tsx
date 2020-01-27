import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import './BackendIndicator.scss';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface IBackendIndicatorProps extends InjectedIntlProps {
  backendRegion?: string;
}

const BackendIndicator: React.FC<IBackendIndicatorProps> = ({
  intl: {formatMessage},
  backendRegion
}) => (
  <Tooltipped
    label={`${formatMessage({id: 'app.backend'})}: ${backendRegion}`}>
    <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
  </Tooltipped>
)

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
