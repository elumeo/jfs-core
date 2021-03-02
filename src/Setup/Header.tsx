import React, { useState, useEffect, useMemo} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useIntl} from 'react-intl';
import AppHeader from 'Component/Header/AppHeader';
import NotificationBadge from 'Component/Notification/NotificationBadge';
import BackendIndicator from 'Component/Header/BackendIndicator';
type THeaderProps = {
}
const Header = ({
}: THeaderProps) => {
  const { formatMessage } = useIntl();
  return (<AppHeader
    leftTools={
      () => <>
            <BackendIndicator/>
        </>
      
    }
    rightTools={
      () => (
        <>
          <NotificationBadge/>
        </>
      )
    }
  />
  );
};
export default Header;