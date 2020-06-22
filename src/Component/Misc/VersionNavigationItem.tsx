import React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import Global from '../../Store/Reducer/Global';
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
  state: Global.State,
  ownProps: IVersionNavigationItemProps
): IVersionNavigationItemProps => ({
  ...ownProps,
  version: state.Core.App.packageJson.version
});

const enhance = connect(mapStateToProps);

export default enhance(VersionNavigationItem);
