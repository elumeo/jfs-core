import React from 'react';
import { Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid } from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  ContactPhone as ContactPhoneIcon
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

const Develop: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Box p={2} m={2} style={{backgroundColor: theme.palette.info.main, color: theme.palette.getContrastText(theme.palette.info.main)}}>Info</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{backgroundColor: theme.palette.error.main, color: theme.palette.getContrastText(theme.palette.error.main)}}>Error</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{backgroundColor: theme.palette.warning.main, color: theme.palette.getContrastText(theme.palette.warning.main)}}>Warning</Box>
        </Grid>
        <Grid item>
          <Box p={2} m={2} style={{backgroundColor: theme.palette.success.main, color: theme.palette.getContrastText(theme.palette.success.main)}}>Success</Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Box component={Paper} m={2}>
            <List dense>
              <ListItem button selected={true}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'primary111'} secondary={'secondary222'} />
              </ListItem>

              <ListItem button selected={false}>
                <ListItemIcon>
                  <ContactPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={'primary222'} secondary={'secondary222'} />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box component={Paper} ml={0} m={2}>
            <List>
              <ListItem button selected={true}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'primary111'} secondary={'secondary222'} />
              </ListItem>

              <ListItem button selected={false}>
                <ListItemIcon>
                  <ContactPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={'primary222'} secondary={'secondary222'} />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box component={Paper} ml={0} m={2} p={2}>
            <Chip label={'label label1'} icon={<ContactPhoneIcon />} />
            <Chip label={'label label2'} clickable icon={<AccountCircleIcon />} />

            <Chip size={'small'} label={'label label3'} clickable icon={<AccountCircleIcon />} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Develop;
