import React, { CSSProperties, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';

const getNavigationWidth = (theme: Theme) => theme.spacing(39);

export type Props = {
  children?: JSX.Element | JSX.Element[];
  navigation?: JSX.Element;
  spacing?: {width: number; height: number};
  className?: string;
}

const useGridContainerStyles = (theme: Theme, spacing: Props['spacing']): CSSProperties => ({
  minHeight: `calc(100% - ${theme.mixins.toolbar.minHeight}px - ${theme.spacing(spacing.height)}px)`,
  width: `calc(100% - ${theme.spacing(spacing.width)}px)`,
  marginLeft: spacing.width > 0 ? `${theme.spacing(1)}px` : 0,
  marginRight: spacing.width > 0 ? `${theme.spacing(1)}px` : 0,
  marginTop: spacing.height > 0 ? `${theme.spacing(1)}px` : 0,
  marginBottom: spacing.height > 0 ? `${theme.spacing(1)}px` : 0,
});

const useGridItemNavigationStyles = (theme: Theme): CSSProperties => ({
  width: `${getNavigationWidth(theme)}px`
});

const useGridItemContentStyles = (theme: Theme, hasNavigation: boolean): CSSProperties => ({
  marginLeft: hasNavigation ? `${theme.spacing(1)}px` : 0,
  width: hasNavigation ? `calc(100% - ${getNavigationWidth(theme)}px - ${theme.spacing(1)}px)` : '100%'
});

const AppLayout = ({ children, className, navigation = null, spacing = { width: 2, height: 2.5} }: Props) => {
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const gridContainerStyles = useMemo<CSSProperties>(() => useGridContainerStyles(theme, spacing), [spacing]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const gridItemNavigationStyles = useMemo<CSSProperties>(() => useGridItemNavigationStyles(theme), []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const gridItemContentStyles = useMemo<CSSProperties>(() => useGridItemContentStyles(theme, navigation !== null), [navigation]);

  return <>
    <Grid container style={gridContainerStyles} className={className} wrap={'nowrap'}>
      {navigation !== null && <Grid item style={gridItemNavigationStyles}>{navigation}</Grid>}
      <Grid item style={gridItemContentStyles}>{children}</Grid>
    </Grid>
  </>;
};

export default memo(AppLayout);
