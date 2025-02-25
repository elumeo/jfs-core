import React from 'react';
import { useIntl } from 'react-intl';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, AppBarProps, IconButton, Toolbar, Typography, ToolbarProps, Stack, Theme } from '@mui/material';
import { openNavigation } from 'Store/Action/Navigation';
import { useDispatch } from 'react-redux';

export type Props = {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  variant?: ToolbarProps['variant']
  position?: AppBarProps['position']
  color?: AppBarProps['color'],
  appBarProps?: AppBarProps
  toolbarProps?: ToolbarProps
};
const toolbarStyle = {
  height: (_theme: Theme) => _theme.mixins.toolbar.minHeight,
  overflow: 'hidden',
  pr: .25
}
const AppToolbar: React.FC<Props> = ({
  variant = 'dense',
  position = 'sticky',
  color = 'primary',
  appBarProps = {},
  toolbarProps = {},
  ...props
}) => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl();
  const openDrawer = React.useCallback(() => dispatch(openNavigation()), [dispatch]);
  return (
    <AppBar
      position={position}
      sx={toolbarStyle}
      color={color}
      {...appBarProps}>
      <Toolbar
        disableGutters
        variant={variant}
        {...toolbarProps}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={toolbarStyle}
          alignItems={'center'}
          width={'100%'}>
          <Stack
            direction={'row'}
            justifyContent={'flex-start'}
            sx={toolbarStyle}
            spacing={1}
            alignItems={'center'}>
            <IconButton color='inherit' aria-label='menu' onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              {formatMessage({ id: 'app.title' })}
            </Typography>
            {props.left || <></>}
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            sx={toolbarStyle}
            alignItems={'center'}>
            {props.middle || <></>}
          </Stack>
          <Stack
            direction={'row'}
            sx={toolbarStyle}
            justifyContent={'flex-end'}
            alignItems={'center'}>
            {props.right || <></>}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default AppToolbar;
