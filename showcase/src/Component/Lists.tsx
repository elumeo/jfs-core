import React, { memo } from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import { colors as textColors } from './Typographies'
import { colors as bgColors } from './Colors'
import AppNavigation from 'Component/AppNavigation';
import {
  Box,
  Button,
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
  Typography
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
  const [bgColor, setBgColor] = React.useState(bgColors[0])
  const [textColor, setTextColor] = React.useState(textColors[0])
  const [secondary, setSecondary] = React.useState(false)
  const toggleDense = () => setDense(!dense);
  const toggleBg = () => setBgColor(bgColors[Math.floor(Math.random() * (bgColors.length - 1)) + 1]);
  const toggleText = () => setTextColor(textColors[Math.floor(Math.random() * (textColors.length - 1)) + 1]);

  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='Lists' subheader={'Boxes are useful to apply stylings'}/>
            <CardContent>
              <CodeBox>
                <Box component={Typography}>{`<Box component={Card} width='100%' marginBottom={1} borderColor={theme.palette.primary.main}>...</Box>`}</Box>
              </CodeBox>
              <Box>
                <Grid container spacing={2}>
                  <Grid item><Button variant='contained' onClick={toggleBg}>Box prop:border</Button></Grid>
                  <Grid item><Button variant='contained' onClick={toggleText}>Box prop:color</Button></Grid>
                  <Grid item><FormControlLabel control={<Switch onChange={toggleDense} value={dense} />} label='dense'/></Grid>
                </Grid>
              </Box>
              <Box border='1px solid' borderColor={bgColor + '.main'} p={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h6' color={textColor}>Text only {dense ? 'dense' : ''}</Typography>
                    <List dense={dense} subheader={<ListSubheader>borderColor: {bgColor + '.main'}</ListSubheader>}>
                      {generate(
                        <ListItem button onClick={() => setSecondary(!secondary)}>
                          <ListItemText primary={'ListItemText prop:primary' + (dense ? '(dense)' : '')} secondary={secondary ? 'ListItemText prop:secondary' : null}/>
                        </ListItem>,
                      )}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant='h6' color={textColor}>Icon with text {dense ? 'dense' : ''}</Typography>
                    <List dense={dense} subheader={<ListSubheader> textColor: {textColor}</ListSubheader>}>
                      {generate(
                        <ListItem button onClick={() => setSecondary(!secondary)}>
                          <ListItemIcon><FolderIcon/></ListItemIcon>
                          <ListItemText
                            style={{color: textColor}}
                            primary={'ListItemText prop:primary' + (dense ? '(dense)' : '')}
                            secondary={secondary ? 'ListItemText prop:secondary' : null}
                          />
                        </ListItem>,
                      )}
                    </List>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default memo(Lists);
