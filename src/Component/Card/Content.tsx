import React, {FC, useMemo} from 'react';
import {CardContent, SxProps} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import { CardContentProps } from '@mui/material/CardContent/CardContent';

export type Props = CardContentProps & {
  fullHeight?: boolean;
  withSubtitle?: boolean;
  overrideCardTitleHeight?: string;
}

const Content: FC<Props> = ({fullHeight = false, withSubtitle = false, overrideCardTitleHeight = null, ...rest}) => {
  const theme = useTheme();
  const sx: SxProps = useMemo(() => ({
    flexDirection: 'column',
    height: overrideCardTitleHeight !== null ? overrideCardTitleHeight : fullHeight
      ? 'calc(100% - ' + (withSubtitle ? theme.spacing(10.5) : theme.spacing(7)) + ')'
      : 'initial'
  }), [fullHeight, withSubtitle, overrideCardTitleHeight]);
  return <CardContent sx={sx} {...rest} />;
};

export default Content;
