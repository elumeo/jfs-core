import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { AppCardContent } from './Card';

const DevelopLists: React.FC = () => {
  return (
    <Card>
      <AppCardContent>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper>
              <List dense>
                <ListItem button selected={true}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={'primary111'} secondary={'secondary222'} />
                </ListItem>

                <ListItem button >
                  <ListItemIcon>
                    <ContactPhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={'primary222'} secondary={'secondary222'} />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper>
              <List>
                <ListItem button >
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={'primary111'} secondary={'secondary222'} />
                </ListItem>

                <ListItem button selected={true} sx={{ backgroundColor: 'secondary' }}>
                  <ListItemIcon>
                    <ContactPhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={'primary222'} secondary={'secondary222'} />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item><Chip label={'label label1'} icon={<ContactPhoneIcon />} /></Grid>
                  <Grid item><Chip label={'label label2'} clickable icon={<AccountCircleIcon />} /></Grid>
                  <Grid item><Chip size={'small'} label={'label label3'} clickable icon={<AccountCircleIcon />} /></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </AppCardContent>
    </Card>
  )
}

export default DevelopLists
