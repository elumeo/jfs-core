/* eslint-disable max-lines */
import Done from '@mui/icons-material/Done';
import { Box, Card, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React, { memo } from 'react';
import Layout from '../../Component/App/Layout';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';
import {
  BadgePercent,
  BidBlock,
  BoxOpen,
  CashInAdvance,
  CashOnDelivery,
  Check,
  DeletePin,
  DeliveryAddress,
  FilterReset,
  Ideal,
  InvoiceAddress,
  MultipleSources,
  PayPal,
  PhoneBlock,
  Pound,
  RatePay,
  Test,
  WebShop,
  WebShopBidAgent,
  WebShopBlock
} from '../../Component/Icon';
import AppNavigation from './AppNavigation.showcase';
import CodeBox from './CodeBox.showcase';
const sxs = {
  icon: {
    fontSize: definition.typography.pxToRem(32),
    color: definition.palette.secondary.main
  }
}

const Icons = () => {
  const [iconColor, setIconColor] = React.useState<'materialUi' | 'reactMd'>('materialUi');

  return (
    <Layout navigation={<AppNavigation />}>
      <Container disableGutters maxWidth={false}>
        <Card>
          <CardHeader title='Icons' />
          <CardContent>
            <Typography variant={'h6'}>Custom Icons</Typography>
            <Grid container>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><BadgePercent /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercent/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><BidBlock /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BidBlock/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><BoxOpen /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BoxOpen/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><CashInAdvance /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashInAdvance/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><CashOnDelivery /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashOnDelivery/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><Check /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<Check/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><DeletePin /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeletePin/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><DeliveryAddress /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeliveryAddress/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><FilterReset /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<FilterReset/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><Ideal /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<Ideal/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><InvoiceAddress /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddress/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><InvoiceAddress /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddress/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><MultipleSources /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<MultipleSources/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PayPal /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPal/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PayPal /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPal/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PhoneBlock /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PhoneBlock/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><RatePay /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<RatePay/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><Test /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<Test/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShop /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShop/>`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShopBidAgent /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBidAgent />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShopBlock /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBlock />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><Pound /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<Pound />`}</CodeBox></ListItemText>
              </ListItem></Grid>
            </Grid>
            <Box mt={2}>
              <Typography variant={'h6'}>Icon Usage</Typography>
              <CodeBox>
                <Box component={Typography}>{`import { BadgePercent } from 'Core/Component/Icon';`}</Box>
                <Box component={Typography}>{`import definition from 'Core/Component/App/Stateless/Style/Theme/Definition';`}</Box>
                <Box component={Typography}>{`const style = ({`}</Box>
                <Box pl={1} component={Typography}>{`icon: {`}</Box>
                <Box pl={2} component={Typography}>{`fontSize: definition.typography.pxToRem(32),`}</Box>
                <Box pl={2} component={Typography}>{`color: definition.palette.secondary.main`}</Box>
                <Box pl={1} component={Typography}>{`}`}</Box>
                <Box>{` });`}</Box>
              </CodeBox>
              <List>
                <ListItem>
                  <ListItemAvatar><BadgePercent /></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercent />`}</CodeBox></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Box component={BadgePercent} color='secondary.main' fontSize={definition.typography.pxToRem(32)} />
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Box component={BadgePercent} color='secondary.main' fontSize={definition.typography.pxToRem(32)} />`}</CodeBox>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercent sx={{ fontSize: definition.typography.pxToRem(32), color: definition.palette.secondary.main }} />
                  </ListItemAvatar>
                  <ListItemText><CodeBox component={'span'}
                    size={'small'}>{`<BadgePercent sx={{ fontSize: definition.typography.pxToRem(32), color :definition.palette.secondary.main }} />`}</CodeBox></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercent sx={sxs.icon} />
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<BadgePercent sx={classes.icon} />`}</CodeBox>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Typography variant={'h4'} color='secondary'> <BadgePercent /></Typography>
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Typography variant={'h4'} color='secondary'><BadgePercent /></Typography>`}</CodeBox>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
            <Box mt={2}>
              <Typography variant={'h6'}>Default Styling</Typography>
              <Typography>Current default color is the font color. This means with the switch to material ui framework most icon which are currently grey are then font color (which is nearly
                black).</Typography>
              <FormControlLabel
                control={<Switch
                  onChange={() => setIconColor(iconColor === 'reactMd' ? 'materialUi' : 'reactMd')}
                  checked={iconColor === 'reactMd'}
                />}
                label='ReactMd Styling'
              />
              <Box mt={1}>
                <Grid container spacing={1}>
                  <Grid item><BadgePercent sx={iconColor === 'reactMd' ? { color: `${definition.palette.common.black}80` } : null} /></Grid>
                  <Grid item><Done color={'secondary'} /></Grid>
                  <Grid item><WebShopBidAgent color={'primary'} /></Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default memo(Icons);
