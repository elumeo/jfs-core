import React, { memo } from 'react';
import { Card, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';
import LinkIcon from '@material-ui/icons/Link';
import AppsIcon from '@material-ui/icons/Apps';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import ListIcon from '@material-ui/icons/List';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import TableChartIcon from '@material-ui/icons/TableChart';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import TabIcon from '@material-ui/icons/Tab';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import ShareIcon from '@material-ui/icons/Share';

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
