import React from 'react';
import {Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid} from '@material-ui/core';
import {
    AccountCircle as AccountCircleIcon,
    ContactPhone as ContactPhoneIcon,
} from '@material-ui/icons';

const Develop: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={3}>
                <Box component={Paper} m={2}>
                    <List dense>
                        <ListItem button selected={true}>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"primary111"} secondary={"secondary222"}/>
                        </ListItem>

                        <ListItem button selected={false}>
                            <ListItemIcon>
                                <ContactPhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"primary222"} secondary={"secondary222"}/>
                        </ListItem>
                    </List>
                </Box>
            </Grid>

            <Grid item xs={3}>
                <Box component={Paper} ml={0} m={2}>
                    <List>
                        <ListItem button selected={true}>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"primary111"} secondary={"secondary222"}/>
                        </ListItem>

                        <ListItem button selected={false}>
                            <ListItemIcon>
                                <ContactPhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"primary222"} secondary={"secondary222"}/>
                        </ListItem>
                    </List>
                </Box>
            </Grid>

            <Grid item xs={3}>
                <Box component={Paper} ml={0} m={2} p={2}>
                    <Chip label={"label label1"} icon={<ContactPhoneIcon />}/>
                    <Chip label={"label label2"} clickable icon={<AccountCircleIcon />}/>

                    <Chip size={"small"} label={"label label3"} clickable icon={<AccountCircleIcon />}/>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Develop;
