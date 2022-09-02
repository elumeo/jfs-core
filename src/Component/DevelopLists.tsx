import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@material-ui/icons';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const DevelopLists: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper>
              <List dense>
                <ListItem button selected={true}>
                  <ListItemIcon>
                    <AccountCircleIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'primary111'} secondary={'secondary222'}/>
                </ListItem>

                <ListItem button selected={false}>
                  <ListItemIcon>
                    <ContactPhoneIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'primary222'} secondary={'secondary222'}/>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper>
              <List>
                <ListItem button selected={true}>
                  <ListItemIcon>
                    <AccountCircleIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'primary111'} secondary={'secondary222'}/>
                </ListItem>

                <ListItem button selected={false}>
                  <ListItemIcon>
                    <ContactPhoneIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'primary222'} secondary={'secondary222'}/>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item><Chip label={'label label1'} icon={<ContactPhoneIcon/>}/></Grid>
                  <Grid item><Chip label={'label label2'} clickable icon={<AccountCircleIcon/>}/></Grid>
                  <Grid item><Chip size={'small'} label={'label label3'} clickable icon={<AccountCircleIcon/>}/></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default React.memo(DevelopLists)
