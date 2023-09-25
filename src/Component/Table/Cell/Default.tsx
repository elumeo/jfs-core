import React from 'react';
import Root, { Props as RootProps } from 'Component/Table/Cell/Root';
import Loading from './Loading';

export type Props = RootProps & {
  isLoading?: boolean;
};

const Default: React.FC<Props> = ({ children,
  isLoading = false,
  ...rest }) => {

  return <Root {...rest}>
    {isLoading === false && <>{children}</>}
    {isLoading && <Loading />}
  </Root>;
};
export default Default;
