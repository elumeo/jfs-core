import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useIntl } from 'react-intl';

export type Props = {
  pending: boolean;
  onClick: () => void;
}

const Submit: React.FC<Props> = ({ pending, onClick }) => {
  const intl = useIntl();
  return (
    <Button
      disabled={pending}
      onClick={onClick}
      color='primary'>
      {pending
        ? <CircularProgress size='1.8rem'/>
        : intl.formatMessage({id: 'app.logout.action'})}
    </Button>
  );
}

export default Submit;