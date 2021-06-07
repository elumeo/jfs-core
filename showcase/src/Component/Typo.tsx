import React from 'react';
import { Box, CardContent, CardHeader, Paper, Typography, Link, TypographyVariant } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})

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
const Typo: React.FC<Props> = ({
  classes
}) => {
  return (
    <Box component={Paper} flexGrow={1}>
      <CardHeader 
        title='Typographies (Component: CardHeader {Prop: title})' 
        subheader={'(h1-6, body1-2, subtitle1-2, caption)  (Component: CardHeader {Prop: subheader}'} />
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
            [<Link href='https://material.io/design/typography/the-type-system.html#type-scale' >Specs</Link>]
          </>
        </Typography >
        {variants.map((variant, index) => <Typography key={variant} variant={variant as TypographyVariant}>variant='{variant}'</Typography>)}
        <Typography > custom variants will be available in material-ui version 5.X (<Link target='_blank'
          href='https://github.com/mui-org/material-ui/issues/22257'>ISSUE</Link>)</Typography >
        <Typography > We should define custom Typography  styles by defining new variant types.</Typography >
      </CardContent>
      <>text without typography  in Paper and outside CardContent</>
    </Box>
  );
};
export default withStyles(style)(Typo);