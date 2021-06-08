import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import { Box, Button, Grid, PropTypes, CardContent, CardHeader } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import * as Color from '@elumeo/jfs-core/build/Types/Color'
type Props = {
} & WithStyles
const style = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center' as 'center',
        color: theme.palette.text.secondary,
    },
})
type VARIANT = 'contained' | 'outlined' | 'text'
const variants: VARIANT[] = [
    'text',
    'outlined',
    'contained',
]

const colors: Color.Button[] = [
    'primary',
    'secondary',
    'inherit'
]
const generate = (_variants: string[], _colors: Color.Button[]) => {
    const rows = _variants.map(variant =>
        _colors.map(
            color =>
                <Grid item key={'grid-item-' + variant + color} xs={4}>
                    <Button color={color} variant={variant as VARIANT} key={'btn-' + variant + color}>{variant} + {color}</Button>
                </Grid>)
    )
    return <Grid container spacing={1}>
        {rows.map(
            (row, i) => (
                <Grid container item xs={12} spacing={3} key={'grid-row+' + i}>{row}</Grid>
            )

        )}
    </Grid>

}

const ButtonExample: React.FC<Props> = ({
    classes
}) => {
    return (<CardContent>
        <CardHeader title='Buttons (variant + color)' />
        <Box className={classes.root}>
            {generate(variants, colors)}
        </Box>
    </CardContent>
    );
};
export default withStyles(style)(ButtonExample);