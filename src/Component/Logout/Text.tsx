import React from 'react';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';

export type Props = {
  override?: React.ReactNode;
}

const Text: React.FC<Props> = ({ override }) => {
  const intl = useIntl();
  return (
    <Typography>
      {override
        ? override
        : intl.formatMessage({id: 'app.logout.message'})}
    </Typography>
  );
}

export default Text;