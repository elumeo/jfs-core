import React, { memo } from 'react';
import { Box, CardContent, CardHeader, Typography, Grid, Container, Card, Link } from '@mui/material';
import * as Color from '../../Types/Color'
import AppNavigation from './AppNavigation.showcase';
import CodeBox from './CodeBox.showcase';
import Layout from '../../Component/App/Layout'

export const colors: Color.Typography[] = [
  'initial' as Color.Typography,
  'inherit' as Color.Typography,
  'primary' as Color.Typography,
  'secondary' as Color.Typography,
  'textPrimary',
  'textSecondary',
  'error',
]
const Typographies = () => {
  return (
    <Layout navigation={<AppNavigation/>}>
        <Container disableGutters maxWidth={false}>
          <Grid container direction={'column'} spacing={1}>
            <Grid item>
              <Card>
                <CardHeader title='Typographies'/>
                <CardContent>
                  <Box>
                    <Typography>The <CodeBox component={'span'} size={'small'}>{`<Typography />`}</CodeBox> element is used to format a string in different ways. Therefore you can
                      pass different pre-defined descriptors to the <CodeBox component={'span'} size={'small'}>variant</CodeBox> property of the Typography .</Typography>
                    <Typography variant={'body2'} color={'textSecondary'}>With version 5 of
                      Material UI we can <Link target={'_blank'} href={'https://github.com/mui-org/material-ui/issues/22257'}>add more custom variants</Link> to the standard variants.</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardHeader title='Standard variants'/>
                <CardContent>
                  <Typography variant={'h5'}>Variant <CodeBox component={'span'} size={'small'}>h5</CodeBox> - This variant is used in dialogs and cards title</Typography>
                  <Box mt={2}><Typography variant={'h6'}>Variant <CodeBox component={'span'} size={'small'}>h6</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'subtitle1'}>Variant <CodeBox component={'span'} size={'small'}>subtitle1</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'subtitle2'}>Variant <CodeBox component={'span'} size={'small'}>subtitle2</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'body1'}>Variant <CodeBox component={'span'} size={'small'}>body1</CodeBox> - This variant is the default for common
                    text</Typography></Box>
                  <Box mt={2}><Typography variant={'body2'}>Variant <CodeBox component={'span'} size={'small'}>body2</CodeBox> - This variant is used in lists and
                    tables</Typography></Box>
                  <Box mt={2}><Typography variant={'button'}>Variant <CodeBox component={'span'} size={'small'}>button</CodeBox> - This variant is used in
                    buttons</Typography></Box>
                  <Box mt={2}><Typography variant={'caption'}>Variant <CodeBox component={'span'} size={'small'}>caption</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'overline'}>Variant <CodeBox component={'span'} size={'small'}>overline</CodeBox></Typography></Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardHeader title='Edge case variants' subheader={'I guess these are not used in default Material UI components but can be used manually in some situations'}/>
                <CardContent>
                  <Typography variant={'h1'}>Variant <CodeBox component={'span'} size={'small'}>h1</CodeBox></Typography>
                  <Box mt={2}><Typography variant={'h2'}>Variant <CodeBox component={'span'} size={'small'}>h2</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'h3'}>Variant <CodeBox component={'span'} size={'small'}>h3</CodeBox></Typography></Box>
                  <Box mt={2}><Typography variant={'h4'}>Variant <CodeBox component={'span'} size={'small'}>h4</CodeBox></Typography></Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
  </Layout>
  );
};
export default memo(Typographies);
