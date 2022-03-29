import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';

import useActions from 'Store/useActions';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export type Props = {
  left?: JSX.Element;
  middle?: JSX.Element;
  right?: JSX.Element;
  variant?: 'regular' | 'dense';
  position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative';
  color?: 'primary' | 'secondary'
};

const AppToolbar: React.FC<Props> = ({
  variant = 'dense',
  position = 'sticky',
  color = 'primary',
  ...tools
}) => {
  const theme = useTheme<Theme>();
  const { formatMessage } = useIntl();
  const { openNavigation } = useActions();
  const openDrawer = React.useCallback(() => openNavigation(), []);
  return (
    <AppBar position={position} color={color}>
      <Toolbar
        disableGutters
        variant={variant}
        style={{ height: theme.mixins.toolbar.minHeight }}>
        <Grid
          container
          justifyContent={'space-between'}
          alignItems={'center'}
        // height='100%'
        // boxSizing='border-box'
        // paddingRight={theme.typography.pxToRem(4)}
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
export default memo(AppToolbar);
