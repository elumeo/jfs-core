import React, { memo } from 'react';
import { CardContent } from '@material-ui/core';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';
import _ from 'lodash';

export type AppCardContentBaseProps = CardContentProps & {
  fullHeight?: boolean;
  withSubtitle?: boolean;
  overrideCardTitleHeight?: string;
  className?: string;
};

const AppCardContentBase = ({ children, ...rest }: AppCardContentBaseProps) => {
  return (
    <CardContent {..._.omit(rest, ['fullHeight', 'withSubtitle', 'overrideCardTitleHeight'])}>
      {children}
    </CardContent>
  );
};

export default memo(AppCardContentBase);
