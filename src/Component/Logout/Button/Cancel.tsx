import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';

export type Props = {
  onClick: () => void;
};

const Cancel: React.FC<Props> = ({ onClick }) => {
  const intl = useIntl();
  return (
    <Button
      onClick={onClick}>
      {intl.formatMessage({id: 'app.cancel.action'})}
    </Button>
  );
}

export default Cancel;