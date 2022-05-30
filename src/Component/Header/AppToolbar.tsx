import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';

import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import theme from 'Component/App/Stateless/Style/Theme/Definition';
import { openNavigation } from 'Store/Action/Navigation';
import { useDispatch } from 'react-redux';

export type Props = {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  variant?: 'regular' | 'dense';
  position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative';
  color?: 'primary' | 'secondary'
};
const toolbarStyle = { height: theme.mixins.toolbar.minHeight }
const AppToolbar: React.FC<Props> = ({
  variant = 'dense',
  position = 'sticky',
  color = 'primary',
  ...tools
}) => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl();
  const openDrawer = React.useCallback(() => dispatch(openNavigation()), [dispatch]);
  return (
    <AppBar position={position} color={color}>
      <Toolbar
        disableGutters
        variant={variant}
        style={toolbarStyle}>
        <Grid
          container
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Grid
            container
            item
            xs={4}
            justifyContent={'flex-start'}
            alignItems={'center'}>
            <IconButton color='inherit' aria-label='menu' onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              {formatMessage({ id: 'app.title' })}
            </Typography>
            {tools.left || <></>}
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent={'center'}
            alignItems={'center'}>
            {tools.middle || <></>}
          </Grid>
          <Grid
            container
            item
            xs={4}
            justifyContent={'flex-end'}
            alignItems={'center'}>
            {tools.right || <></>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default AppToolbar;
