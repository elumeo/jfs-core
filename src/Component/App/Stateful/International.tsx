import React from 'react';
import useSelector from 'Store/useSelector';

export type ChildrenProps = {
  locale: string;
};

export type Props = {
  translations: Record<string, Record<string, string>>;
  children: (props: ChildrenProps) => React.ReactNode;
};

const International: React.FC<Props> = ({ children }) => {
  const locale = useSelector(state => state.Core.Language.language);
  return (
    <>
      {children({ locale })}
    </>
  );
}

export default International;