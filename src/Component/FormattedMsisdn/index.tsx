import React, { memo } from 'react';
import { useSelector } from 'Types/Redux';

import * as PhoneNumberFormat from 'Utilities/Format/PhoneNumber';

interface IFormattedMsisdnProps {
  msisdn: string;
}

const FormattedMsisdn = ({msisdn}: IFormattedMsisdnProps) => {
  const backendRegion = useSelector(state => state.Core.System.backendRegion);
  return <>{PhoneNumberFormat.formatPhone(msisdn, backendRegion)}</>;
}

export default memo(FormattedMsisdn);
