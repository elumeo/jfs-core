import React from 'react';
import { Box, Paper, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const style = () => ({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const Directory = ({classes}: WithStyles) => {
    const entries = ['ExternalLinks', 'Icons', 'Colors', 'Typo', 'Buttons', 'Lists', 'Cards', 'Dialogs', 'Tables', 'Notifications']
    const listItems = entries.map(name => <Link to={'/' + name} key={name} className={classes.link}>
        <ListItem button  >
            <ListItemText> <Typography variant={'h4'} color='initial'>{name}</Typography></ListItemText>
        </ListItem>
    </Link>
    )

    return (
        <Box component={Paper} maxHeight='100%' m={[1, 1, 1, 1]}>
            <CardContent component={List}>
                {listItems}
            </CardContent>
        </Box>
    );
};

export default withStyles(style)(Directory);
