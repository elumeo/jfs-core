import React from 'react';
import { useIntl } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import MUIToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
  const openDrawer = React.useCallback(() => openNavigation(), [])
  return (
    <AppBar position='static'>
      <MUIToolbar disableGutters variant={variant} style={{
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
            <IconButton
              color='inherit'
              aria-label='menu'
              onClick={openDrawer}>
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6' noWrap>
              {formatMessage({ id: 'app.title' })}
            </Typography>
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
      </MUIToolbar>
    </AppBar>
  );
};
export default Toolbar;
