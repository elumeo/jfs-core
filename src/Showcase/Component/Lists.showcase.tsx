import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import AppNavigation from './AppNavigation.showcase';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import CodeBox from './CodeBox.showcase';
import Layout from '../../Component/App/Layout'

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

  return (
    <Layout navigation={<AppNavigation />}>
      <Container maxWidth={'xl'}>
        <Card>
          <CardHeader title='Lists' />
          <CardContent>
            <CodeBox>
              <Typography>{`<List dense subheader={<ListSubheader>With a subheader</ListSubheader>>`}</Typography>
            </CodeBox>
            <Stack direction='row'>
              <FormControlLabel control={<Switch onChange={toggleShowSubheader} value={showSubheader} />} label='Show Subheader' />
              <FormControlLabel control={<Switch onChange={toggleDense} value={dense} />} label='Dense' />
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <Stack spacing={0}>
                <Typography variant='h6'>Text only list</Typography>
                <List dense={dense} subheader={showSubheader === true ? <ListSubheader >With a subheader; disableGutters</ListSubheader> : null}>
                  {generate(
                    <ListItem button onClick={() => setSecondary(!secondary)}>
                      <ListItemText primary={'Primary List Item Text'} secondary={secondary ? 'Secondary List Item Text' : null} />
                    </ListItem>,
                  )}
                </List>
              </Stack>
              <Stack>
                <Typography variant='h6'>Icon and text list</Typography>
                <List dense={dense} subheader={showSubheader === true ? <ListSubheader>With a subheader</ListSubheader> : null}>
                  {generate(
                    <ListItem button onClick={() => setSecondary(!secondary)}>
                      <ListItemIcon><FolderIcon /></ListItemIcon>
                      <ListItemText primary={'Primary List Item Text'} secondary={secondary ? 'Secondary List Item Text' : null} />
                    </ListItem>,
                  )}
                </List>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};
export default Lists
