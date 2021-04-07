import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from 'Store/useActions';

export type Props = {
  left?: JSX.Element;
  middle?: JSX.Element;
  right?: JSX.Element;
  variant?: 'regular' | 'dense'
};

const Toolbar: React.FC<Props> = ({ variant = 'dense', ...tools }) => {
  const { formatMessage } = useIntl();
  const { openNavigation } = useActions();

  return (
    <MUI.AppBar position='static'>
      <MUI.Toolbar disableGutters variant={variant} style={{
        height: 58
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          paddingRight: 4
        }}>
          <div style={{
            width: 'calc(100% / 3)',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <MUI.IconButton
              color='inherit'
              aria-label='menu'
              onClick={openNavigation}>
              <MenuIcon/>
            </MUI.IconButton>
            <MUI.Typography variant='h6'>
              {formatMessage({ id: 'app.title' })}
            </MUI.Typography>
            {tools.left || <></>}
          </div>
          <div style={{
            width: 'calc(100% / 3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {tools.middle || <></>}
          </div>
          <div style={{
            width: 'calc(100% / 3)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            {tools.right || <></>}
          </div>
        </div>
      </MUI.Toolbar>
    </MUI.AppBar>
  );
};
export default Toolbar;
