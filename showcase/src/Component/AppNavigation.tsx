import React, { memo } from 'react';
import { Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { RouteComponentProps, withRouter } from 'react-router';
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

const AppNavigation = ({history}: RouteComponentProps) => {
  return <Card>
    <List dense>
      <ListItem button onClick={() => history.push('/Boxes')}>
        <ListItemIcon><CheckBoxOutlineBlankIcon/></ListItemIcon>
        <ListItemText primary='Boxes'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Buttons')}>
        <ListItemIcon><ViewAgendaIcon/></ListItemIcon>
        <ListItemText primary='Buttons'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Cards')}>
        <ListItemIcon><DashboardIcon/></ListItemIcon>
        <ListItemText primary='Cards'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Colors')}>
        <ListItemIcon><ColorLensIcon/></ListItemIcon>
        <ListItemText primary='Colors'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Dialogs')}>
        <ListItemIcon><FilterNoneIcon/></ListItemIcon>
        <ListItemText primary='Dialogs / Popovers / Tooltips'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/ExternalLinks')}>
        <ListItemIcon><LinkIcon/></ListItemIcon>
        <ListItemText primary='External Links'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Forms')}>
        <ListItemIcon><BallotOutlinedIcon/></ListItemIcon>
        <ListItemText primary='Forms'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Icons')}>
        <ListItemIcon><AppsIcon/></ListItemIcon>
        <ListItemText primary='Icons'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Lists')}>
        <ListItemIcon><ListIcon/></ListItemIcon>
        <ListItemText primary='Lists'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Notifications')}>
        <ListItemIcon><NotificationsIcon/></ListItemIcon>
        <ListItemText primary='Notifications'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Tables')}>
        <ListItemIcon><TableChartIcon/></ListItemIcon>
        <ListItemText primary='Tables'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Tabs')}>
        <ListItemIcon><TabIcon/></ListItemIcon>
        <ListItemText primary='Tabs'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/Typographies')}>
        <ListItemIcon><FontDownloadIcon/></ListItemIcon>
        <ListItemText primary='Typographies'/>
      </ListItem>
      <ListItem button onClick={() => history.push('/SharedComponent')}>
        <ListItemIcon><ShareIcon/></ListItemIcon>
        <ListItemText primary='SharedComponent'/>
      </ListItem>
    </List>
  </Card>;
};
export default withRouter(memo(AppNavigation));
