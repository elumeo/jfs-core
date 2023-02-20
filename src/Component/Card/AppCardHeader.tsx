import React from 'react';
import { CardHeader, LinearProgress, Stack, SxProps, Typography } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import RefreshButton from 'Component/Button/RefreshButton';

export type AppCardHeaderBaseProps = {
  isLoading?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  titleIcon?: React.ReactNode;
  action?: React.ReactNode;
  onRefresh?: () => void;
  refreshButtonColor?: IconButtonProps['color'];
  refreshButtonSize?: IconButtonProps['size'];
  headerActions?: React.ReactNode;
};
const hiddenStyle: SxProps = {
  visibility: 'hidden',
}
const cardHeaderStyles: SxProps = {
  display: 'flex',
  position: 'relative',
  alignItems: 'flex-start'
}
const AppCardHeader: React.FC<AppCardHeaderBaseProps> = ({
  isLoading = false,
  title,
  subtitle = null,
  titleIcon = null,
  onRefresh = null,
  refreshButtonColor = 'secondary',
  refreshButtonSize = 'small',
  headerActions = null,
  action = null
}) => <>
    <CardHeader
      sx={cardHeaderStyles}
      subheader={subtitle}
      action={action}
      title={
        <>
          <Stack
            justifyContent={'space-between'}
            direction={'row'}>
            <Stack
              direction={'row'}
              spacing={1}
              alignItems={'center'}
            >
              {
                titleIcon
              }
              <Typography variant='h5'>{title}</Typography>
              {
                onRefresh !== null
                &&
                <RefreshButton
                  color={refreshButtonColor}
                  size={refreshButtonSize}
                  disabled={isLoading}
                  onClick={onRefresh} />
              }
            </Stack>
            {
              headerActions !== null && <>{headerActions}</>
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

export default AppCardHeader
