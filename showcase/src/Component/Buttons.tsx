import React from 'react';
import { Box, Button, Grid, CardContent, CardHeader, Container, Card, Radio, Typography } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as Color from '@elumeo/jfs-core/build/Types/Color'
import AppNavigation from 'Component/AppNavigation';

type Props = {} & WithStyles
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

type VARIANT = 'contained' | 'outlined' | 'text';
const variants: VARIANT[] = ['text', 'outlined', 'contained'];
const colors: Color.Button[] = ['primary', 'secondary', 'inherit'];

const generate = (_variants: string[], _colors: Color.Button[], size: 'small' | 'medium' | 'large' = 'medium') => {
  const rows = _variants.map(variant => _colors.map(color => <Grid item key={'grid-item-' + variant + color} xs={4}>
    <Button color={color} variant={variant as VARIANT} key={'btn-' + variant + color} size={size}>{variant} + {color}</Button>
  </Grid>))
  return <Grid container spacing={1}>{rows.map((row, i) => (<Grid container item xs={12} spacing={3} key={'grid-row+' + i}>{row}</Grid>))}</Grid>
}

const Buttons: React.FC<Props> = ({classes}) => {
  const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium')
  return (<Grid container>
    <Grid item xs={2}><AppNavigation/></Grid>
    <Grid item xs>
      <Container>
        <Card>
          <CardHeader title='Buttons' subheader={'variant + color'}/>
          <CardContent>
            <Box>
              <Typography variant='h6'>Guidelines</Typography>
              <ol>
                <li><Typography>Use <Typography component={'span'} color={'primary'}>primary</Typography> button only for 1 item in a view (Page, Dialog, etc.)</Typography></li>
                <li><Typography>Use <Typography component={'span'} color={'secondary'}>secondary</Typography> button when highlighting a function is required which is not the primary
                  function of the view</Typography></li>
                <li><Typography>Use text buttons for dialog actions</Typography></li>
              </ol>
            </Box>
            <Box>
              <FormControlLabel checked={size === 'small'} control={<Radio/>} label={'Small'} value={'small'} onChange={(event, selected) => (selected ? setSize('small') : null)}/>
              <FormControlLabel checked={size === 'medium'} control={<Radio/>} label={'Medium'} value={'medium'}
                                onChange={(event, selected) => (selected ? setSize('medium') : null)}/>
              <FormControlLabel checked={size === 'large'} control={<Radio/>} label={'Large'} value={'large'} onChange={(event, selected) => (selected ? setSize('large') : null)}/>
            </Box>
            <Box className={classes.root}>{generate(variants, colors, size)}</Box>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  </Grid>);
};
export default withStyles(style)(Buttons);
