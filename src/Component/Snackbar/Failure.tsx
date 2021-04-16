import React from 'react';
import { AxiosError } from "axios";
import { useIntl } from 'react-intl';
import * as Format from 'Utilities/Format';

export type Props = {
  title?: string;
  details: string;
};

const Failure: React.FC<Props> = ({ title, details }) => {
  const intl = useIntl();
  return (
    <span>
      <u>{intl.formatMessage({ id: 'app.error' })}:&nbsp;</u>
      {details}
      <br/>
      {title && (
        <span style={{ fontSize: 'x-small' }}>
          {title}
        </span>
      )}
    </span>
  );
};

export default Failure;