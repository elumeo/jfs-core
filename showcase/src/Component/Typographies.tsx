import React from 'react';
import { Box, CardContent, CardHeader, Paper, Typography, Link, TypographyVariant, Grid, Container } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import * as Color from '@elumeo/jfs-core/build/Types/Color'
import AppNavigation from 'Component/AppNavigation';

type Props = {} & WithStyles
const style = (theme: Theme) => ({
  root: {
    width: '100%'
  },
  copycat: {
    ...theme.typography.button
  }
})

const variants: TypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
]
export const colors: Color.Typography[] = [
  'initial' as Color.Typography,
  'inherit' as Color.Typography,
  'primary' as Color.Typography,
  'secondary' as Color.Typography,
  'textPrimary',
  'textSecondary',
  'error',
]
const Typographies: React.FC<Props> = ({classes}) => {
  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Paper className={classes.root}>
            <CardHeader title='Typographies' />
            <CardContent>
              <Box display='flex' flexDirection='row'>
                <Box>
                  <Box>
                    <Typography
                      variant='subtitle1'
                      component='span'>
                      You can pass different pre-defined descriptors to the
                      'variant'
                      property of the Typography .
                    </Typography>
                    <Link href='https://material.io/design/typography/the-type-system.html#type-scale'>[Specs]</Link>
                  </Box>{variants.map((variant) => <Typography key={variant} variant={variant as TypographyVariant}>variant='{variant}'</Typography>)}
                  <Typography>
                    custom variants will be available in material-ui version 5.X (<Link target='_blank'
                                                                                        href='https://github.com/mui-org/material-ui/issues/22257'>ISSUE</Link>)
                  </Typography>
                  <Typography> We should define custom Typography styles by defining new variant types.</Typography>
                  <Box className={classes.copycat}>This text looks like that of a button</Box>
                </Box>
              </Box>
            </CardContent>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
export default withStyles(style)(Typographies);
