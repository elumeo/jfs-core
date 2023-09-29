import React from 'react';
import { useIntl } from 'react-intl';
import { ButtonProgress } from 'Component/Button';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';

export type Props = {
  pending: boolean;
  onClick: ButtonProgressProps['onClick'];
};

const Submit: React.FC<Props> = ({ pending, onClick }) => {
  const intl = useIntl();
  return (
    <ButtonProgress
      inProgress={pending}
      onClick={onClick}
      color='primary'
      variant={'contained'}>
      {intl.formatMessage({ id: 'app.confirm' })}
    </ButtonProgress>
  );
};

export default Submit;
