import { useIntl } from 'react-intl';
import React from 'react';
import useCore from 'Effect/useCore';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
import { CORE_VERSION } from 'Constant/Version';

const VersionNavigationItem: React.FC = () => {
  const { formatMessage } = useIntl();
  const { App: { packageJson: { version } } } = useCore()
  return <>
    <ListItem>
      <ListItemIcon><InfoIcon color={'info'}/></ListItemIcon>
      <ListItemText primary={formatMessage({ id: 'app.version' }, { versionNumber: version })}/>
    </ListItem>
    <ListItem>
      <ListItemIcon><InfoIcon color={'info'}/></ListItemIcon>
      <ListItemText primary={formatMessage({ id: 'core.version' }, { versionNumber: CORE_VERSION })}/>
    </ListItem>
  </>
}

export default React.memo(VersionNavigationItem);
