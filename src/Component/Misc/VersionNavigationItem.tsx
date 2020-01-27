import * as React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { ICoreRootReducer } from '../../Store/Reducer/combineReducers';
import { compose } from 'redux';
import { connect } from 'react-redux';

export interface IVersionNavigationItemProps extends InjectedIntlProps {
  version?: string;
}

const VersionNavigationItem: React.FC<IVersionNavigationItemProps> = ({
  intl: { formatMessage },
  version
}) => (
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
    }
  />
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IVersionNavigationItemProps
): IVersionNavigationItemProps => ({
  ...ownProps,
  version: state.appReducer.packageJson.version
})

const enhance = compose(
  connect(mapStateToProps),
  injectIntl
);

export default enhance(VersionNavigationItem);
