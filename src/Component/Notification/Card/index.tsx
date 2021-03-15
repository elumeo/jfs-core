import React from 'react';
import * as MUI from '@material-ui/core';
// import DefaultNotificationCard from './Default';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core';
import Icon from './Icon';
import { Notification } from 'Types/Notification';
// import {} from  './Default'
export type Props = {
  actions?: JSX.Element[];
  // variant : VariantType
  notification: Notification;
};

const Card: React.FC<Props> & { Default: typeof Default; Icon: typeof Icon } = ({
  children,
  actions,
  notification:{variant,
    title,
    subtitle,
    content}
}) => {
  const { palette } = useTheme();
  console.log('test log', { palette,  children });
  return (
    <MUI.Card
      style={{
        width: '100%',
        maxHeight: '100%',
        minHeight: 'fit-content',
        backgroundColor: palette[variant]?.['main'],
        color: palette[variant]?.['contrastText']
      }}
    >
      <MUI.CardHeader
        avatar={<Icon variant={variant} />}
        title={<MUI.Typography component='h4'>{title}</MUI.Typography>}
        subheader={<MUI.Typography component='h6'>{subtitle}</MUI.Typography>}
        subheaderTypographyProps={{color: 'inherit' }}
        action={actions && <MUI.CardActions>{actions}</MUI.CardActions>}
      />
      <MUI.CardContent>
        <MUI.Typography>

        {content}
        {children}
        </MUI.Typography>
      </MUI.CardContent>
    </MUI.Card>
  );
};
Card.Default = Default;
Card.Icon = Icon;
export default Card;
