import React, {FC} from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';
import {useTheme} from '@material-ui/core/styles';
import {useIntl} from 'react-intl';

const DefaultChannelTooltip: FC = () => {
  const theme = useTheme();
  const {formatMessage} = useIntl();
  return <Tooltip
    title={formatMessage({id: 'productSearchAdvancedOptions.tooltip.defaultChannel.searchHint'})}
    style={{transform: 'translate(3px, 3px)', display: 'inline-block'}}
  >
    <span><WarningIcon style={{color: theme.palette.warning.main}}/></span>
  </Tooltip>;
};

export default DefaultChannelTooltip;
