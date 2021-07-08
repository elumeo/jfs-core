import React, { memo } from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import AppNavigation from 'Component/AppNavigation';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  Typography,
} from '@material-ui/core';
import CodeBox from 'Component/CodeBox';

const generate = (element: React.ReactElement) => {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Lists = () => {
  const [dense, setDense] = React.useState(false)
  const [showSubheader, setShowSubheader] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)
  const toggleDense = () => setDense(!dense);
  const toggleShowSubheader = () => setShowSubheader(!showSubheader);

  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='Lists'/>
            <CardContent>
              <CodeBox>
                <Typography>{`<List dense subheader={<ListSubheader>With a subheader</ListSubheader>>`}</Typography>
              </CodeBox>
              <Grid container spacing={1}>
                <Grid item>
                  <FormControlLabel control={<Switch onChange={toggleShowSubheader} value={showSubheader}/>} label='Show Subheader'/>
                </Grid>
                <Grid item>
                  <FormControlLabel control={<Switch onChange={toggleDense} value={dense}/>} label='Dense'/>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant='h6'>Text only list</Typography>
                  <List dense={dense} subheader={showSubheader === true ? <ListSubheader>With a subheader</ListSubheader> : null}>
                    {generate(
                      <ListItem button onClick={() => setSecondary(!secondary)}>
                        <ListItemText primary={'Primary List Item Text'} secondary={secondary ? 'Secondary List Item Text' : null}/>
                      </ListItem>,
                    )}
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant='h6'>Icon and text list</Typography>
                  <List dense={dense} subheader={showSubheader === true ? <ListSubheader>With a subheader</ListSubheader> : null}>
                    {generate(
                      <ListItem button onClick={() => setSecondary(!secondary)}>
                        <ListItemIcon><FolderIcon/></ListItemIcon>
                        <ListItemText primary={'Primary List Item Text'} secondary={secondary ? 'Secondary List Item Text' : null}/>
                      </ListItem>,
                    )}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default memo(Lists);
