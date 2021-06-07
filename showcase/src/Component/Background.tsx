import React from 'react';
import { Box, CardContent, CardHeader, Grid } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
type Props = {
} & WithStyles
export const colors = [
    "primary.main",
    "secondary.main",
    "error.main",
    "warning.main",
    "info.main",
    "success.main",
    "text.primary",
    "text.secondary",
    "text.disabled"
]
const style = (theme: Theme) => ({})
const Background: React.FC<Props> = ({
    classes
}) => {
    const { formatMessage } = useIntl();
    return (
        <>
            <CardHeader title={'styled boxes (bgColor)'} />
            <CardContent>

                <Grid container spacing={1}>
                    {
                        colors.map(
                            (color, index) => (
                                <Grid  item key={color}>
                                    <Box p={1} color={index % 2 === 0 ? 'primary.contrastText' : 'secondary.contrastText'} bgcolor={color}>{color} </Box>
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </CardContent>
        </>
    );
};
export default withStyles(style)(Background);