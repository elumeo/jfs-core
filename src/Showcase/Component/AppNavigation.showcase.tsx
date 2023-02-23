import React from 'react';
import { Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import AppsIcon from '@mui/icons-material/Apps';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ListIcon from '@mui/icons-material/List';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import TableChartIcon from '@mui/icons-material/TableChart';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TabIcon from '@mui/icons-material/Tab';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

const AppNavigation = () => {
  const navigate = useNavigate();
  return <Card sx={{ minWidth: 300 }}>
    <List dense>
      <ListItem button onClick={() => navigate('/Boxes')}>
        <ListItemIcon><CheckBoxOutlineBlankIcon /></ListItemIcon>
        <ListItemText primary='Boxes' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Buttons')}>
        <ListItemIcon><ViewAgendaIcon /></ListItemIcon>
        <ListItemText primary='Buttons' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Cards')}>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary='Cards' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Colors')}>
        <ListItemIcon><ColorLensIcon /></ListItemIcon>
        <ListItemText primary='Colors' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Dialogs')}>
        <ListItemIcon><FilterNoneIcon /></ListItemIcon>
        <ListItemText primary='Dialogs / Popovers / Tooltips' />
      </ListItem>
      <ListItem button onClick={() => navigate('/ExternalLinks')}>
        <ListItemIcon><LinkIcon /></ListItemIcon>
        <ListItemText primary='External Links' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Forms')}>
        <ListItemIcon><BallotOutlinedIcon /></ListItemIcon>
        <ListItemText primary='Forms' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Icons')}>
        <ListItemIcon><AppsIcon /></ListItemIcon>
        <ListItemText primary='Icons' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Lists')}>
        <ListItemIcon><ListIcon /></ListItemIcon>
        <ListItemText primary='Lists' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Notifications')}>
        <ListItemIcon><NotificationsIcon /></ListItemIcon>
        <ListItemText primary='Notifications' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Tables')}>
        <ListItemIcon><TableChartIcon /></ListItemIcon>
        <ListItemText primary='Tables' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Tabs')}>
        <ListItemIcon><TabIcon /></ListItemIcon>
        <ListItemText primary='Tabs' />
      </ListItem>
      <ListItem button onClick={() => navigate('/Typographies')}>
        <ListItemIcon><FontDownloadIcon /></ListItemIcon>
        <ListItemText primary='Typographies' />
      </ListItem>
      <ListItem button onClick={() => navigate('/SharedComponent')}>
        <ListItemIcon><ShareIcon /></ListItemIcon>
        <ListItemText primary='SharedComponent' />
      </ListItem>
    </List>
  </Card>;
};
export default AppNavigation
