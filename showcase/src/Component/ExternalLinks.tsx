import React from 'react';
import { Card, CardContent, CardHeader, Typography, List, Collapse, ListItem, Link, Grid, Container } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import useActions from 'Store/useActions';
import AppNavigation from 'Component/AppNavigation';

type Props = {} & WithStyles
const style = (theme: Theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
})
const ExternalLinks: React.FC<Props> = ({classes}) => {
  const {addToastAction} = useActions();
  const [open, setOpen] = React.useState(0);
  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='External Links'/>
            <CardContent component={List}>
              <ListItem button onClick={() => {
                setOpen(0)
              }}>
                <Typography variant='subtitle1'>@material-ui/core</Typography>
              </ListItem>
              <Collapse in={open === 0}>
                <List disablePadding>
                  <ListItem button className={classes.nested}><Link target='__blank'
                                                                    href='https://material-ui.com/styles/basics/#material-ui-styles'>@material-ui/styles</Link></ListItem>
                  <ListItem button className={classes.nested}><Link target='__blank'
                                                                    href='https://material-ui.com/styles/advanced/#advanced'>@material-ui/core/styles</Link></ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={() => {
                setOpen(1)
              }}>
                <Typography variant='subtitle1'>@material-ui/lab</Typography>
              </ListItem>
              <Collapse in={open === 1}>
                <List disablePadding>
                  <ListItem button className={classes.nested} onClick={() => {
                    addToastAction({
                      contentMessage: 'Hi, I\'ve been slide up here.'
                    })
                  }}><>/Alert</>
                  </ListItem>
                  <ListItem button className={classes.nested}><Link target='__blank' href='https://material-ui.com/components/Autocomplete/'>/Autocomplete</Link></ListItem>
                  <ListItem button className={classes.nested}><Link target='__blank' href='https://material-ui.com/components/skeleton/'>/Skeleton</Link></ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={() => {
                setOpen(2)
              }}>
                <Typography variant='subtitle1'><Link target='__blank' href='https://material-ui.com/components/data-grid/#mit-version'>@material-ui/data-grid (Paginable Data
                  Table)</Link></Typography>
              </ListItem>
              <Collapse in={open === 2}/>
              <ListItem button onClick={() => {
                setOpen(3)
              }}>
                <Typography variant='subtitle1'><Link target='__blank'
                                                      href='https://material-ui.com/components/pickers/#material-ui-pickers'>@material-ui/pickers (DatePicker and TimePicker
                  variants)</Link></Typography>
              </ListItem>
              <Collapse in={open === 3}/>
              <ListItem button onClick={() => {
                setOpen(4)
              }}>
                <Typography variant='subtitle1'><Link target='__blank' href='https://material-ui.com/components/material-icons/'>@material-ui/icons (Search for available Material
                  UI Icons)</Link></Typography>
              </ListItem>
              <Collapse in={open === 4}/>

              <ListItem button onClick={() => {
                setOpen(5)
              }}>
                <Typography variant='subtitle1'><Link target='__blank' href='https://github.com/nfl/react-helmet'>react-helmet</Link></Typography>
              </ListItem>
              <Collapse in={open === 5}/>

              <ListItem button onClick={() => {
                setOpen(6)
              }}>
                <Typography variant='subtitle1'><Link target='__blank' href='https://github.com/bvaughn/react-window'>react-window</Link></Typography>
              </ListItem>
              <Collapse in={open === 6}/>
              <ListItem button onClick={() => {
                setOpen(7)
              }}>
                <Typography variant='subtitle1'><Link target='__blank'
                                                      href='https://github.com/bvaughn/react-virtualized-auto-sizer/'>react-virtualized-auto-sizer</Link></Typography>
              </ListItem>
              <Collapse in={open === 7}/>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default withStyles(style)(ExternalLinks);
