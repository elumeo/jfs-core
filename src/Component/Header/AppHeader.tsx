import React from 'react';
import AppToolbar from './AppToolbar';

interface IAppHeaderProps {
  leftTools: () => JSX.Element;
  middleTools?: () => JSX.Element;
  rightTools: () => JSX.Element;
}

export default ({leftTools, middleTools, rightTools} : IAppHeaderProps) => (
  <div className='app-header'>
    <AppToolbar
      LeftTools={leftTools}
      MiddleTools={middleTools}
      RightTools={rightTools}
    />
  </div>
)
