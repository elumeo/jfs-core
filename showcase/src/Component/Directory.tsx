import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import { Box, Paper, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
type Props = {
} & WithStyles
const style = (theme: Theme) => ({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})
const Directory: React.FC<Props> = ({
    classes
}) => {
    const { formatMessage } = useIntl();
    const entries = ['Module', 'Icon', 'Typo', 'Styling', 'ExampleCard']
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