import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import { ButtonProgress } from 'Component/Button';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';
import * as Selector from 'Store/Selector/Core/Login';

export type Props = {
  onClick: ButtonProgressProps['onClick'];
  disabled: boolean;
};

const Submit: React.FC<Props> = ({ onClick, disabled }) => {
  const intl = useIntl();
  const publicKey = useSelector(Selector.getPublicKey);
  const isCheckingLogin = useSelector(Selector.isCheckingLogin);
  return <ButtonProgress
    color='primary'
    variant={'contained'}
    onClick={onClick}
    disabled={disabled || !publicKey}
    inProgress={isCheckingLogin}>
    {intl.formatMessage({ id: 'login.button' })}
  </ButtonProgress>;
};

export default Submit;
