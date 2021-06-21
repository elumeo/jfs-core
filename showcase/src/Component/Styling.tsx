import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import { Box, Card, CardHeader } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import Background from './Background';
import ButtonExample from './ButtonExample';
import ListExample from './ListExample';
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})
const Styling: React.FC<Props> = ({
    classes
}) => {
    const { formatMessage } = useIntl();
    return (
        <Box component={Card} >
            <CardHeader title='Styling'/>
            <ButtonExample />
            <Background />

            <ListExample />
        </Box>
    );
};
export default withStyles(style)(Styling);