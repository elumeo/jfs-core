import React from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, Link, Container } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';
import Layout from '../../Component/App/Layout';

type Props = {};

const classes = ({
  nested: {
    paddingLeft: definition.spacing(4)
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
            <ListItem button sx={classes.nested}><Link target='__blank'
              href='https://material-ui.com/styles/basics/#material-ui-styles'>@material-ui/styles</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank'
              href='https://material-ui.com/styles/advanced/#advanced'>@material-ui/core/styles</Link></ListItem>
            <ListItem button sx={classes.nested}><Link href='https://material.io/design/typography/the-type-system.html#type-scale'>The Typography Type System</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank'
              href='https://material-ui.com/customization/default-theme/'>Material UI Default Theme</Link></ListItem>
          </List>
          <Typography variant='h6'>Material UI Lab</Typography>
          <List disablePadding>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/alert/'>Alert</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/Autocomplete/'>Autocomplete</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/skeleton/'>Skeleton</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/data-grid/#mit-version'>Data Grid</Link></ListItem>
          </List>
          <Typography variant='h6'>Other useful resources</Typography>
          <List disablePadding>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/pickers/#material-ui-pickers'>DatePicker and
              TimePicker</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://material-ui.com/components/material-icons/'>Material UI Icons</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://github.com/nfl/react-helmet'>react-helmet</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank' href='https://github.com/bvaughn/react-window'>react-window</Link></ListItem>
            <ListItem button sx={classes.nested}><Link target='__blank'
              href='https://github.com/bvaughn/react-virtualized-auto-sizer'>react-virtualized-auto-sizer</Link></ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  </Layout>;
};
export default ExternalLinks
