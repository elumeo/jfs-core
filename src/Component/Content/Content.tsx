import React, { useMemo } from 'react';

type ContentProps = {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  const styles = useMemo(() => ({ width: '100%' }), []);
  return <div style={styles}>{children}</div>
};

export default Content;
