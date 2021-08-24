import React, { memo } from 'react';
import { CardContent } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';

const useStyles = makeStyles<Theme, AppCardContentProps>(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: props => {
        if (props.overrideCardTitleHeight !== null) {
          return props.overrideCardTitleHeight;
        }
        const cardTitleHeight = props.withSubtitle
          ? theme.spacing(10)
          : theme.spacing(7);
        return props.fullHeight
          ? 'calc(100% - ' + cardTitleHeight + 'px)'
          : 'initial';
      },
    },
  }),
);

type AppCardContentProps = CardContentProps & {
  fullHeight?: boolean;
  withSubtitle?: boolean;
  overrideCardTitleHeight?: string;
};

const AppCardContent = (props: AppCardContentProps) => {
  const {
    fullHeight = false,
    withSubtitle = false,
    overrideCardTitleHeight = null,
    children,
    ...rest
  } = props;
  const classes = useStyles({
    ...props,
    fullHeight,
    withSubtitle,
    overrideCardTitleHeight,
  });

  return (
    <CardContent classes={{ root: classes.root }} {...rest}>
      {children}
    </CardContent>
  );
};

export default memo(AppCardContent);
