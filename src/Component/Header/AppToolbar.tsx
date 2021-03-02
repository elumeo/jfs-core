import React, { useCallback } from 'react';
// import Toolbar from '@material-ui/core/Toolbars/Toolbar';
import './AppToolbar.scss';
import { useIntl } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar, { ToolbarClassKey } from '@material-ui/core/Toolbar';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from 'Store/Action/useActions';
export interface IAppToolbarProps {
  LeftTools: () => JSX.Element;
  MiddleTools?: () => JSX.Element;
  RightTools: () => JSX.Element;
  variant?: 'regular' | 'dense'
}

const AppToolbar: React.FC<IAppToolbarProps> = ({ LeftTools, MiddleTools, RightTools, variant='dense' }) => {
  const { formatMessage } = useIntl();
  const { openNavigation } = useActions();
  const openSettings = useCallback(() => {
    openNavigation();
  }, [openNavigation]);
  return (
    <AppBar position={'static'} className='tools'>
      <Toolbar disableGutters variant={variant}>
        
        <IconButton color='inherit' aria-label='menu' onClick={openSettings}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>{formatMessage({ id: 'app.title' })}</Typography>
        <div className='tools__toolbar'>
          <div className='left-tools'>
            <LeftTools />
          </div>
          <div className='middle-tools'>{MiddleTools !== undefined && <MiddleTools />}</div>
          <div className='right-tools'>
            <RightTools />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );

  // <AppBar
  //       title={formatMessage({id: 'app.title'})}
  //       nav={<NavigationButton iconName='menu'/>}
  //       colored
  //       fixed>
  //       <div className='tools'>
  //         <div className='left-tools md-btn--toolbar'>
  //           <LeftTools/>
  //         </div>
  //         <div className='middle-tools md-btn--toolbar'>
  //           {MiddleTools !== undefined && <MiddleTools/>}
  //         </div>
  //         <div className='right-tools md-btn--toolbar'>
  //           <RightTools/>
  //         </div>
  //       </div>
  //     </AppBar>
};
export default AppToolbar;
