import React from 'react';
import { Card, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
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
import NatIcon from '@mui/icons-material/Nat';
import { useLocation, useNavigate } from 'react-router-dom';
import { Celebration } from '@mui/icons-material';
const AppNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return <Card sx={{ minWidth: 300 }}>
    <List dense>
      <ListItemButton onClick={() => navigate('/Boxes')} selected={pathname.startsWith('/Boxes')}>
        <ListItemIcon><CheckBoxOutlineBlankIcon /></ListItemIcon>
        <ListItemText primary='Boxes' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Buttons')} selected={pathname.startsWith('/Buttons')}>
        <ListItemIcon><ViewAgendaIcon /></ListItemIcon>
        <ListItemText primary='Buttons' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Cards')} selected={pathname.startsWith('/Cards')}>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary='Cards' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Colors')} selected={pathname.startsWith('/Colors')}>
        <ListItemIcon><ColorLensIcon /></ListItemIcon>
        <ListItemText primary='Colors' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Dialogs')} selected={pathname.startsWith('/Dialogs')}>
        <ListItemIcon><FilterNoneIcon /></ListItemIcon>
        <ListItemText primary='Dialogs / Popovers / Tooltips' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/ExternalLinks')} selected={pathname.startsWith('/ExternalLinks')}>
        <ListItemIcon><LinkIcon /></ListItemIcon>
        <ListItemText primary='External Links' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Forms')} selected={pathname.startsWith('/Forms')}>
        <ListItemIcon><BallotOutlinedIcon /></ListItemIcon>
        <ListItemText primary='Forms' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Icons')} selected={pathname.startsWith('/Icons')}>
        <ListItemIcon><AppsIcon /></ListItemIcon>
        <ListItemText primary='Icons' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Lists')} selected={pathname.startsWith('/Lists')}>
        <ListItemIcon><ListIcon /></ListItemIcon>
        <ListItemText primary='Lists' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Notifications')} selected={pathname.startsWith('/Notifications')}>
        <ListItemIcon><NotificationsIcon /></ListItemIcon>
        <ListItemText primary='Notifications' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Tables')} selected={pathname.startsWith('/Tables')}>
        <ListItemIcon><TableChartIcon /></ListItemIcon>
        <ListItemText primary='Tables' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Tabs')} selected={pathname.startsWith('/Tabs')}>
        <ListItemIcon><TabIcon /></ListItemIcon>
        <ListItemText primary='Tabs' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Typographies')} selected={pathname.startsWith('/Typographies')}>
        <ListItemIcon><FontDownloadIcon /></ListItemIcon>
        <ListItemText primary='Typographies' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/WebSocket')} selected={pathname.startsWith('/WebSocket')}>
        <ListItemIcon><NatIcon /></ListItemIcon>
        <ListItemText primary='WebSocket' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/SharedComponent')} selected={pathname.startsWith('/SharedComponent')}>
        <ListItemIcon><ShareIcon /></ListItemIcon>
        <ListItemText primary='SharedComponent' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/Misc')} selected={pathname.startsWith('/Misc')}>
        <ListItemIcon><Celebration /></ListItemIcon>
        <ListItemText primary='Clippy & Confetti' />
      </ListItemButton>
    </List>
  </Card>;
};
export default AppNavigation
