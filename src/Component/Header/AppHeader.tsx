import React from 'react';
import AppToolbar from './AppToolbar';

interface IAppHeaderProps {
  leftTools: () => JSX.Element;
  middleTools?: () => JSX.Element;
  rightTools: () => JSX.Element;
  variant?: 'regular' | 'dense'
}

export default ({leftTools, middleTools, rightTools, variant= 'dense'} : IAppHeaderProps) => (
  // <div className='app-header'>
    <AppToolbar
      LeftTools={leftTools}
      MiddleTools={middleTools}
      RightTools={rightTools}
      variant={variant}
    />
  // </div>
)
