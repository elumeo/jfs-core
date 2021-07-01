import React, { memo } from 'react';
import { useSelector } from '../../Types/Redux';
import * as PhoneNumberFormat from '../../Utilities/Format/PhoneNumber';
const FormattedMsisdn = ({ msisdn }) => {
    const backendRegion = useSelector(state => state.Core.System.backendRegion);
    return React.createElement(React.Fragment, null, PhoneNumberFormat.formatPhone(msisdn, backendRegion));
};
export default memo(FormattedMsisdn);