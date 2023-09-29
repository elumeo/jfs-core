import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@mui/material/Button';

export type Props = {
  onClick: () => void;
};

const Cancel: React.FC<Props> = ({ onClick }) => {
  const intl = useIntl();
  return (
    <Button onClick={onClick} variant={'outlined'} color={'secondary'}>
      {intl.formatMessage({ id: 'app.cancel.action' })}
    </Button>
  );
};

export default Cancel;
