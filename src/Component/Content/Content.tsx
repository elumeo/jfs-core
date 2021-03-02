import React from 'react';
import './_styles.scss';
import { useSelector } from 'Types/Redux';

const Content: React.FC = ({ children }) => {
  const splitViewEnabled = useSelector<boolean>(
    state => state.Core.SplitView.splitViewEnabled
  );
  const contentClassName = [
    `authorized-content`,
    splitViewEnabled ? 'split-view--active' : ''
  ].join(' ');

  return (
    <div className={contentClassName}>
      {children}
    </div>
  );
}

export default Content;
