import React from 'react';
import { Box, CardContent, CardHeader, Paper, Typography, Link } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})
const Typo: React.FC<Props> = ({
  classes
}) => {
  return (
    <Box component={Paper} flexGrow={1}>
      <CardHeader title='Typographies (Component: CardHeader {Prop: title})' subheader={'(h1-6, body1-2, subtitle1-2, caption)  (Component: CardHeader {Prop: subheader}'} />
      <CardContent>
        <Typography
          variant='subtitle1'
          component='span'
        ><>
            <>
              You can pass different pre-defined descriptors to the
            </>
            <Typography variant='caption'> variant</Typography >
            <>
              property of the Typography .
            </>
          </>
        </Typography >
        <Typography
          component='li'
          variant='h1'>variant='h1'</Typography >
        <Typography
          component='li'
          variant='h2'>variant='h2'</Typography >
        <Typography
          component='li'
          variant='h3'>variant='h3'</Typography >
        <Typography
          component='li'
          variant='h4'>variant='h4'</Typography >
        <Typography
          component='li'
          variant='h5'>variant='h5'</Typography >
        <Typography
          component='li'
          variant='h6'>variant='h6'</Typography >
        <Typography
          component='li'
          variant='subtitle1'>variant='subtitle1'</Typography >
        <Typography
          component='li'
          variant='subtitle2'>variant='subtitle2'</Typography >
        <Typography
          component='li'
          variant='body1'>variant='body1'</Typography >
        <Typography
          component='li'
          variant='body2'>variant='body2'</Typography >
        <Typography
          component='li'
          variant='button'>variant='button'</Typography >
        <Typography
          component='li'
          variant='caption'>variant='caption'</Typography >
        <Typography
          component='li'
          variant='srOnly'>variant='srOnly'</Typography >
        <Typography
          component='li'
          variant='overline'>variant='overline'</Typography >
        <Typography > custom variants will be available in material-ui version 5.X (<Link target='_blank'
          href="https://github.com/mui-org/material-ui/issues/22257">ISSUE</Link>)</Typography >
        <Typography > We should define custom Typography  styles by defining new variant types.</Typography >
      </CardContent>
      <>text without typography  in Paper and outside CardContent</>
    </Box>
  );
};
export default withStyles(style)(Typo);