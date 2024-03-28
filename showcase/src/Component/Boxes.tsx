import React, { memo } from 'react';
import { colors as textColors } from './Typographies'
import { colors as allColors } from './Colors'
import AppNavigation from 'Component/AppNavigation';
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';
import CodeBox from 'Component/CodeBox';
import { useTheme } from '@material-ui/core/styles';

const Boxes = () => {
  const theme = useTheme();
  const [bgColor, setBgColor] = React.useState(allColors[0])
  const [textColor, setTextColor] = React.useState(textColors[0])
  const toggleBg = () => setBgColor(allColors[Math.floor(Math.random() * (allColors.length - 1)) + 1]);
  const toggleText = () => setTextColor(textColors[Math.floor(Math.random() * (textColors.length - 1)) + 1]);

  const getColorCode = (color: string) => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'textPrimary':
        return theme.palette.text.primary;
      case 'textSecondary':
        return theme.palette.text.secondary;
      case 'error':
        return theme.palette.error.main;
      case 'inherit':
      default:
        return 'inherit';
    }
  }

  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title={'Boxes'}/>
            <CardContent>
              <Box mb={2}>
                <Grid container spacing={2}>
                  <Grid item><Button variant={'contained'} onClick={toggleBg}>Box prop:border</Button></Grid>
                  <Grid item><Button variant={'contained'} onClick={toggleText}>Box prop:color</Button></Grid>
                </Grid>
              </Box>
              <Box border={'1px solid'} borderColor={bgColor + '.main'} p={2} color={getColorCode(textColor)}>
                <Typography color={'inherit'}>This is a <CodeBox component={'span'} size={'small'}>{`<Box />`}</CodeBox> element. Boxes are useful to apply styles:</Typography>
                <CodeBox>
                  <Box component={Typography}>{`<Box component={Card} width={'100%'} marginBottom={1} borderColor={theme.palette.primary.main} color={theme.palette.secondary.main>...</Box>`}</Box>
                </CodeBox>
                <Typography variant={'body2'}>Current text color: {textColor}</Typography>
                <Typography variant={'body2'}>Current border color: {bgColor}.main</Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default memo(Boxes);