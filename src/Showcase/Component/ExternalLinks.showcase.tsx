import React from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, Link, Container } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import Layout from '../../Component/App/Layout';

type Props = {};

const classes = ({
  nested: {
    pl: 4
  }
});

const ExternalLinks: React.FC<Props> = () => {
  return <Layout navigation={<AppNavigation />}>
    <Container disableGutters maxWidth={false}>
      <Card>
        <CardHeader title='External Links' />
        <CardContent component={List}>
          <Typography variant='h6'>Styling</Typography>
          <List disablePadding>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material.io/design/typography/the-type-system.html#type-scale'>The Typography Type System</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/customization/default-theme/'>Material UI Default Theme</Link></ListItem>
          </List>
          <Typography variant='h6'>Material UI Lab</Typography>
          <List disablePadding>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/react-masonry/'>Masonry</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/react-timeline/'>Timeline</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/react-tree-view/'>Treeview</Link></ListItem>
          </List>
          <Typography variant='h6'>Other useful resources</Typography>
          <List disablePadding>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/guides/pickers-migration/'>DatePicker and
              TimePicker: @mui</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://reactdatepicker.com/'>DatePicker and
              TimePicker: react-datepicker</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://mui.com/material-ui/material-icons/'>Material UI Icons</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://github.com/nfl/react-helmet'>react-helmet</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://virtuoso.dev/'>react-virtuoso</Link></ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  </Layout>;
};
export default ExternalLinks
