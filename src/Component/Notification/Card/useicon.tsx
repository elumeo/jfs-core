import { VariantType } from 'notistack';
import React, { useMemo } from 'react';
import FontIcon from '@material-ui/core/Icon';

const useIcon = (variant: VariantType): React.ReactElement | undefined =>
  useMemo(() => {
    switch (variant) {
      case 'success':
        return <FontIcon color='inherit'>check</FontIcon>
      case 'error':
      case 'warning':
      case 'info':
        return <FontIcon color='inherit'>{variant}</FontIcon>
      case 'default':
      default:
        return undefined
    }
  }, [variant])

export default useIcon
