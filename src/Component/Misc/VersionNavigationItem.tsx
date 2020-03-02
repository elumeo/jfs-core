import React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import { ICoreRootReducer } from '../../Store/Reducer';
import { connect } from 'react-redux';
import International from '../International';

export interface IVersionNavigationItemProps {
  version?: string;
}

const VersionNavigationItem: React.FC<IVersionNavigationItemProps> = ({
  version
}) => (
  <International>
    {({ formatMessage }) => (
      <NavigationItem
        iconName="info_outline"
        messageId="app.version"
        messageString={
          formatMessage(
            {id: 'app.version'},
            {
              versionNumber: (
                process.env.NODE_ENV && process.env.NODE_ENV == 'production'
                  ? version
                  : '-DEVELOP-'
              )
            }
          )
        }/>
    )}
  </International>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IVersionNavigationItemProps
): IVersionNavigationItemProps => ({
  ...ownProps,
  version: state.appReducer.packageJson.version
});

const enhance = connect(mapStateToProps);

export default enhance(VersionNavigationItem);
