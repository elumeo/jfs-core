import React from 'react';
import { Box, Button, Grid, CardContent, CardHeader, Container, Card, Radio, Typography, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Color from '@elumeo/jfs-core/build/Types/Color';
import ButtonProgress from '@elumeo/jfs-core/build/Component/Button/ButtonProgress';
import IconButtonProgress from '@elumeo/jfs-core/build/Component/Button/IconButtonProgress';
import AppNavigation from 'Component/AppNavigation';
import Switch from '@material-ui/core/Switch';
import CodeBox from 'Component/CodeBox';

type Props = {} & WithStyles
const style = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center' as 'center',
    color: theme.palette.text.secondary
  }
});

type VARIANT = 'contained' | 'outlined' | 'text';
const variants: VARIANT[] = ['text', 'outlined', 'contained'];
const colors: Color.Button[] = ['primary', 'secondary', 'inherit'];

const generate = (_variants: string[], _colors: Color.Button[], size: 'small' | 'medium' | 'large' = 'medium') => {
  const rows = _variants.map(variant => _colors.map(color => <Grid item key={'grid-item-' + variant + color} xs={4}>
    <Button color={color} variant={variant as VARIANT} key={'btn-' + variant + color} size={size}>{variant} + {color}</Button>
  </Grid>));
  return <Grid container spacing={1}>{rows.map((row, i) => (<Grid container item xs={12} spacing={3} key={'grid-row+' + i}>{row}</Grid>))}</Grid>;
};

const Buttons: React.FC<Props> = ({ classes }) => {
  const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
  const [inProgress, setInProgress] = React.useState(false);

  return (<Grid container>
    <Grid item xs={2}><AppNavigation /></Grid>
    <Grid item xs>
      <Container>
        <Grid container direction={'column'} spacing={1}>
          <Grid item>
            <Card>
              <CardHeader title={'Buttons'} subheader={'variant + color'} />
              <CardContent>
                <Box>
                  <Typography variant={'h6'}>Material UI Buttons</Typography>
                  <ol>
                    <li><Typography>Use <Typography component={'span'} color={'primary'}>primary</Typography> button only for 1 item in a view (Page, Dialog, etc.)</Typography></li>
                    <li><Typography>Use <Typography component={'span'} color={'secondary'}>secondary</Typography> button when highlighting a function is required which is not the primary
                      function of the view</Typography></li>
                    <li><Typography>Use text buttons for dialog actions</Typography></li>
                  </ol>
                </Box>
                <Box>
                  <FormControlLabel
                    checked={size === 'small'}
                    value={'small'}
                    control={<Radio />}
                    label={'Small'}
                    onChange={(event, selected) => selected ? setSize('small') : null} />
                  <FormControlLabel
                    checked={size === 'medium'}
                    value={'medium'}
                    control={<Radio />}
                    label={'Medium'}
                    onChange={(event, selected) => (selected ? setSize('medium') : null)} />
                  <FormControlLabel
                    checked={size === 'large'}
                    value={'large'}
                    control={<Radio />}
                    label={'Large'}
                    onChange={(event, selected) => (selected ? setSize('large') : null)} />
                </Box>
                <Box className={classes.root}>{generate(variants, colors, size)}</Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title={'ButtonProgress and IconButtonProgress'} />
              <CardContent>
                <Typography>To have a consistent ui we have decided to implement a <CodeBox component={'span'} size={'small'}>ButtonProgress</CodeBox> and
                  a <CodeBox component={'span'} size={'small'}>IconButtonProgress</CodeBox> component.</Typography>
                <FormControlLabel control={<Switch onChange={() => setInProgress(!inProgress)} checked={inProgress} />} label='Enable progress' />
                <Box mt={4}>
                  <Typography variant={'h6'}>ButtonProgress</Typography>
                  <Grid container spacing={1} alignItems={'center'}>
                    <Grid item><ButtonProgress inProgress={inProgress} size={size}>A Progress Button</ButtonProgress></Grid>
                    <Grid item><ButtonProgress inProgress={inProgress} size={size} variant={'outlined'} color={'secondary'}>A Progress Button</ButtonProgress></Grid>
                    <Grid item><ButtonProgress inProgress={inProgress} size={size} variant={'contained'} color={'primary'}>A Progress Button</ButtonProgress></Grid>
                  </Grid>
                  <CodeBox>{`<ButtonProgress inProgress={inProgress} size={size}>A Progress Button</ButtonProgress>`}</CodeBox>
                  <CodeBox>
                    {`onClick ? : () => void;`}<br />
                    {`disabled ? : boolean;`}<br />
                    {`inProgress ? : boolean;`}<br />
                    {`color ? : PropTypes.Color;`}<br />
                  </CodeBox>
                  <Typography variant={'caption'}>The <Link target={'_blank'} href={'https://material-ui.com/api/button/'}>Mui ButtonProps</Link> are available as well.</Typography>
                </Box>
                <Box mt={4}>
                  <Typography variant={'h6'}>IconButtonProgress</Typography>
                  <Grid container spacing={1} alignItems={'center'}>
                    <Grid item>{size !== 'large'
                    && <IconButtonProgress inProgress={inProgress} size={size}><SearchIcon /></IconButtonProgress>
                    || <Typography color={'error'}>Not supported!</Typography>
                    }</Grid>
                    <Grid item>{size !== 'large' && <IconButtonProgress inProgress={inProgress} size={size} color={'secondary'}><DoneIcon /></IconButtonProgress>}</Grid>
                    <Grid item>{size !== 'large' && <IconButtonProgress inProgress={inProgress} size={size} color={'primary'}><HomeIcon /></IconButtonProgress>}</Grid>
                  </Grid>
                  <CodeBox>{`<IconButtonProgress inProgress={inProgress} size={size}><SearchIcon /></IconButtonProgress>`}</CodeBox>
                  <CodeBox>
                    {`onClick ? : () => void;`}<br />
                    {`disabled ? : boolean;`}<br />
                    {`inProgress ? : boolean;`}<br />
                    {`color ? : PropTypes.Color;`}<br />
                  </CodeBox>
                  <Typography variant={'caption'}>The <Link target={'_blank'} href={'https://material-ui.com/api/icon-button/'}>Mui IconButtonProps</Link> are available as well.</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>);
};
export default withStyles(style)(Buttons);
