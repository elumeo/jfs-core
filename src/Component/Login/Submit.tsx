import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import { ButtonProgress } from 'Component/Button';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';

export type Props = {
  onClick: ButtonProgressProps['onClick'];
  disabled: boolean;
};

const Submit: React.FC<Props> = ({ onClick, disabled }) => {
  const intl = useIntl();
  const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
  return <ButtonProgress
    color='primary'
    variant={'contained'}
    onClick={onClick}
    disabled={disabled}
    inProgress={isCheckingLogin}>
    {intl.formatMessage({ id: 'login.button' })}
  </ButtonProgress>;
};

export default Submit;
