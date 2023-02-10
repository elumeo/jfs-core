import React from 'react';
import { CardContent } from '@mui/material';
import { CardContentProps } from '@mui/material/CardContent/CardContent';

export type AppCardContentBaseProps = CardContentProps
const AppCardContent: React.FC<AppCardContentBaseProps> = (props) => {
  return <CardContent {...props} />;
};

export default AppCardContent
