import React from 'react';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';
import Root, { Props as RootProps } from 'Component/Table/TableCell/Root';
import { SxProps, Box } from '@mui/material';
import Loading from './Loading';
export enum ContentEllipseMode {
  None = 'none',
  Normal = 'normal',
  Lines = 'lines'
}

export type Props = RootProps & {
  isLoading?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
  overflow?: 'hidden' | 'visible'
};

const Default: React.FC<Props> = ({ children,
  overflow = 'hidden',
  contentEllipseMode = ContentEllipseMode.Lines,
  contentEllipseLines = 4,
  isLoading = false,
  ...rest }) => {
  const ellipsesLinesStyle = React.useMemo<SxProps>(
    () => ({
      overflow,
      whiteSpace: 'normal',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: contentEllipseLines,
      display: '-webkit-box',
    }),
    [contentEllipseLines]
  );

  const styles = React.useMemo<SxProps>(() => {
    switch (contentEllipseMode) {
      case ContentEllipseMode.Lines:
        return ellipsesLinesStyle;
      case ContentEllipseMode.Normal:
        return ellipsesStyle;
      case ContentEllipseMode.None:
      default:
        return null;
    }
  }, [ellipsesLinesStyle]);

  return <Root {...rest}>
    {isLoading === false && <Box sx={styles}>{children}</Box>}
    {isLoading && <Loading />}
  </Root>;
};
export default Default;
