import React, { memo } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Grid, IconButton, Typography } from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CodeBox from 'Component/CodeBox';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => createStyles({
  topRightAction: {margin: -theme.spacing(0.5)}
}));

const Cards = () => {
  const styles = useStyles();
  const [bottomActionButtonPosition, setBottomActionButtonPosition] = React.useState<'default' | 'custom'>('default');
  const [topRightActionButtonNumber, setTopRightActionButtonNumber] = React.useState<1 | 3>(1);
  const [topRightActionButtonAlignment, setTopRightActionButtonAlignment] = React.useState<'default' | 'custom'>('default');
  const [topLeftActionButtonsEnabled, setTopLeftActionButtonsEnabled] = React.useState(false);
  const toggleBottomActionButtonPosition = () => setBottomActionButtonPosition(bottomActionButtonPosition === 'default' ? 'custom' : 'default');
  const toggleTopRightActionButtonNumber = () => setTopRightActionButtonNumber(topRightActionButtonNumber === 1 ? 3 : 1);
  const toggleTopRightActionButtonAlignment = () => setTopRightActionButtonAlignment(topRightActionButtonAlignment === 'default' ? 'custom' : 'default');
  const toggleTopLeftActionButtonsEnabled = () => setTopLeftActionButtonsEnabled(!topLeftActionButtonsEnabled);

  return (<Grid container>
    <Grid item xs={2}><AppNavigation/></Grid>
    <Grid item xs>
      <Container>
        <Grid container direction={'column'} spacing={1}>
          <Grid item>
            <Card>
              <CardHeader title={'This is a basic Card'} subheader={'... with some Action Buttons'}/>
              <CardContent>
                <Typography>The default behaviour of Card actions is that they are aligned on the left side. But with some custom styling we can make the button aligned on the
                  right.</Typography>
                <FormControlLabel control={<Switch onChange={toggleBottomActionButtonPosition} checked={bottomActionButtonPosition === 'custom'}/>} label='Custom position'/>
                <CodeBox>
                  <Box component={Typography}>{`<Box component={CardActions} justifyContent={'flex-end'}>`}</Box>
                </CodeBox>
              </CardContent>
              <Box component={CardActions} justifyContent={bottomActionButtonPosition === 'custom' ? 'flex-end' : null}>
                <Button>Cancel Action</Button>
                <Button color='secondary' variant={'outlined'}>Secondary Action</Button>
                <Button color='primary' variant='contained'>Primary Action</Button>
              </Box>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader
                classes={{action: topRightActionButtonAlignment === 'custom' ? styles.topRightAction : null}}
                disableTypography={topLeftActionButtonsEnabled}
                title={topLeftActionButtonsEnabled === false ? 'This is an advanced card with more options' : <Grid container spacing={1}>
                  <Grid item><Typography variant='h5'>This is an advanced card with more options</Typography></Grid>
                  <Grid item><IconButton size={'small'} style={{padding: '2px'}}><RefreshIcon /></IconButton></Grid>
                </Grid>}
                subheader={topLeftActionButtonsEnabled === false ? '... in the header' : <Typography variant={'body1'} color={'textSecondary'}>... in the header</Typography>}
                action={topRightActionButtonNumber === 1 ? <Button color='primary' variant='contained'>Primary Action</Button> :
                  <Grid container spacing={1} style={{height: '100%'}}>
                    <Grid item><Button>Cancel Action</Button></Grid>
                    <Grid item><Button color='secondary' variant={'outlined'}>Secondary Action</Button></Grid>
                    <Grid item><Button color='primary' variant='contained'>Primary Action</Button></Grid>
                  </Grid>}
              />
              <CardContent>
                <Typography>Material UI supports only 1 action button on the top right by default. But with the help of the Grid we can implement more of them.</Typography>
                <CodeBox>
                  <Box component={Typography}>{`<CardHeader`}</Box>
                  <Box component={Typography} pl={1}>{`action={<Grid container spacing={1}>`}</Box>
                  <Box component={Typography} pl={2}>{`<Grid item><Button>Cancel Action</Button></Grid>`}</Box>
                  <Box component={Typography} pl={2}>{`<Grid item><Button color='secondary' variant={'outlined'}>Secondary Action</Button></Grid>`}</Box>
                  <Box component={Typography} pl={2}>{`<Grid item><Button color='primary' variant='contained'>Primary Action</Button></Grid>`}</Box>
                  <Box component={Typography} pl={1}>{`</Grid>`}</Box>
                  <Box component={Typography}>{`</>`}</Box>
                </CodeBox>
                <FormControlLabel control={<Switch onChange={toggleTopRightActionButtonNumber} checked={topRightActionButtonNumber === 3}/>}
                                  label='Custom number of action buttons'/>

                <Typography>Also the vertical alignment of the title and the buttons is not on one line. We can adjust this with little styling but it is not suggested because we
                  do have 2 different font sizes which will not match completely.</Typography>
                <CodeBox>
                  <Box component={Typography}>{`const useStyles = makeStyles((theme) => createStyles({`}</Box>
                  <Box component={Typography} pl={1}>{`topRightAction: {margin: -theme.spacing(0.5)}`}</Box>
                  <Box component={Typography}>{`}));`}</Box>
                </CodeBox>
                <FormControlLabel control={<Switch onChange={toggleTopRightActionButtonAlignment} checked={topRightActionButtonAlignment === 'custom'}/>}
                                  label='Custom alignment of action buttons'/>

                <Typography>Another position of buttons (IconButtons) we often use is beside the card title text. To achieve this we can use a grid as well.</Typography>
                <CodeBox>
                  <Box component={Typography}>{`<CardHeader`}</Box>
                  <Box component={Typography} pl={1}>{`disableTypography`}</Box>
                  <Box component={Typography} pl={1}>{`title={<Grid container spacing={1}>`}</Box>
                  <Box component={Typography} pl={2}>{`<Grid item><Typography variant='h5'>This is an advanced card with more options</Typography></Grid>`}</Box>
                  <Box component={Typography} pl={2}>{`<Grid item><IconButton size={'small'} style={{padding: '2px'}}><RefreshIcon /></IconButton></Grid>`}</Box>
                  <Box component={Typography} pl={1}>{`</Grid>`}</Box>
                  <Box component={Typography} pl={1}>{`subheader={<Typography variant={'body1'} color={'textSecondary'}>... in the header</Typography>}`}</Box>
                  <Box component={Typography}>{`/>`}</Box>
                </CodeBox>
                <FormControlLabel control={<Switch onChange={toggleTopLeftActionButtonsEnabled} checked={topLeftActionButtonsEnabled}/>}
                                  label='Enable custom action buttons beside card title'/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>);
};

export default memo(Cards);
