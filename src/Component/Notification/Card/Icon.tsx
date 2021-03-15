import React from 'react';
import {Icon as FontIcon} from '@material-ui/core'
import {useTheme, makeStyles, Theme, createStyles} from '@material-ui/core/styles'
// import { INotification } from 'Types/Notification';
import { VariantType } from 'notistack';

export type Props = {
  variant: VariantType;
};

const Icon: React.FC<Props> =
  ({
   variant
   }) => {
    const {palette} = useTheme();
    const iconName = React.useMemo(() => {
      if (variant === 'error'){
        return 'cancel'
      } else if (variant === 'default') {
        return 'alert'
      } else if (variant === 'success'){
        return 'check'
      } else {
        return variant
      }
    }, [variant])
    // const classes = useStyles(variant)();
    console.log({variant,  iconName, test1:  palette?.[variant]})
    return (
      iconName
        ? (
          <FontIcon color='inherit' >
            
            {iconName}
          </FontIcon>
        )
        : null
    );
  };

export default Icon;