import React from 'react';
import { CardHeader, LinearProgress, PropTypes, Stack, SxProps, Typography } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import RefreshButton from 'Component/Button/RefreshButton';

export type AppCardHeaderBaseProps = {
  isLoading?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  titleIcon?: React.ReactNode;
  action?: React.ReactNode;
  onRefresh?: () => void;
  refreshButtonColor?: PropTypes.Color;
  refreshButtonSize?: IconButtonProps['size'];
};
const hiddenStyle: SxProps = {
  visibility: 'hidden',
}
const Header: React.FC<AppCardHeaderBaseProps> = ({
  isLoading = false,
  title,
  subtitle = null,
  titleIcon = null,
  onRefresh = null,
  refreshButtonColor = 'secondary',
  refreshButtonSize = 'small',
  action = null
}) => <>
    <CardHeader
      subheader={subtitle}
      action={action}
      title={
        <>

          <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
          >
            {
              titleIcon
            }
            {typeof title === 'string' ? <Typography variant='h5'>{title}</Typography> : title}
            {
              onRefresh !== null
              &&
              <RefreshButton
                color={refreshButtonColor}
                size={refreshButtonSize}
                inProgress={isLoading}
                onClick={onRefresh} />
            }
          </Stack>
        </>
      }
    />
    <LinearProgress color='secondary' sx={
      isLoading
        ? {}
        : hiddenStyle
    } />
  </>;

export default Header
