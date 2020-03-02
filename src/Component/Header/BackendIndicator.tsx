import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Tooltipped from 'react-md/lib/Tooltips/Tooltipped';
import './BackendIndicator.scss';
import { ICoreRootReducer } from '../../Store/Reducer';
import International from '../International';

export interface IBackendIndicatorProps {
  backendRegion?: string;
}

const BackendIndicator: React.FC<IBackendIndicatorProps> = ({
  backendRegion
}) => (
  <International>
    {({ formatMessage }) => (
      <Tooltipped
        label={`${formatMessage({id: 'app.backend'})}: ${backendRegion}`}>
        <div className={`flag ${(backendRegion || '').toLowerCase()}`}/>
      </Tooltipped>
    )}
  </International>
)

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IBackendIndicatorProps
): IBackendIndicatorProps => ({
  ...ownProps,
  ...state.systemReducer
});

const enhance = compose(
  connect(mapStateToProps)
);

export default enhance(BackendIndicator);
