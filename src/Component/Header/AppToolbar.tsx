import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
import { useDispatch } from 'react-redux';
import { openNavigation } from 'Store/Action';
// import { useTheme } from '@material-ui/styles';
// import { Theme } from '@mui/styles';

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
  // const theme = useTheme<Theme>();
  const { formatMessage } = useIntl();
  const dispatch = useDispatch()
  const openDrawer = React.useCallback(() => dispatch(openNavigation()), [dispatch]);
  return (
    <AppBar position={position} color={color}>
      <Toolbar
        disableGutters
        variant={variant}
        style={{ height: definition.mixins.toolbar.minHeight }}>
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
