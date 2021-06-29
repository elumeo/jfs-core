import React from 'react';
import { useIntl } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import MUIToolbar from '@material-ui/core/Toolbar';
import useTheme from '@material-ui/core/styles/useTheme';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from 'Store/useActions';

export type Props = {
  left?: JSX.Element;
  middle?: JSX.Element;
  right?: JSX.Element;
  variant?: 'regular' | 'dense'
  position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative'
};

const Toolbar: React.FC<Props> = ({ variant = 'dense', position = 'sticky', ...tools }) => {
  const { formatMessage } = useIntl();
  const { openNavigation } = useActions();
  const theme = useTheme()
  const openDrawer = React.useCallback(() => openNavigation(), [])
  return (
    <AppBar position={position}>
      <MUIToolbar disableGutters variant={variant} style={{
        height: 58
      }}>
        <Box
          width='100%'
          height='100%'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          boxSizing='border-box'
          paddingRight={theme.typography.pxToRem(4)}
        >
          <Box
            width='calc(100% / 3)'
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
          >
            <IconButton
              color='inherit'
              aria-label='menu'
              onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              {formatMessage({ id: 'app.title' })}
            </Typography>
            {tools.left || <></>}
          </Box>
          <Box 
            width='calc(100% / 3)'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            {tools.middle || <></>}
          </Box>
          <Box 
            width='calc(100% / 3)'
            display='flex'
            justifyContent='flex-end'
            alignItems='center'>
            {tools.right || <></>}
          </Box>
        </Box>
      </MUIToolbar>
    </AppBar>
  );
};
export default Toolbar;
