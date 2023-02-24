/* eslint-disable max-lines */
import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import {
  BadgePercent as BadgePercentIcon,
  BidBlock as BidBlockIcon,
  BoxOpen as BoxOpenIcon,
  CashInAdvance as CashInAdvanceIcon,
  CashOnDelivery as CashOnDeliveryIcon,
  Check as CheckIcon,
  DeletePin as DeletePinIcon,
  DeliveryAddress as DeliveryAddressIcon,
  FilterReset as FilterResetIcon,
  Ideal as IdealIcon,
  InvoiceAddress as InvoiceAddressIcon,
  MultipleSources as MultipleSourcesIcon,
  PayPal as PayPalIcon,
  PhoneBlock as PhoneBlockIcon,
  RatePay as RatePayIcon,
  Test as TestIcon,
  WebShop as WebShopIcon,
  WebShopBidAgent as WebShopBidAgentIcon,
  WebShopBlock as WebShopBlockIcon
} from '../../Component/Icon';
import AppNavigation from './AppNavigation.showcase';
import CodeBox from './CodeBox.showcase';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import DoneIcon from '@mui/icons-material/Done';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';
import Layout from '../../Component/App/Layout';
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
                <ListItemAvatar><BadgePercentIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><BidBlockIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BidBlockIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><BoxOpenIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<BoxOpenIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><CashInAdvanceIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashInAdvanceIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><CashOnDeliveryIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashOnDeliveryIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><CheckIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<CheckIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><DeletePinIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeletePinIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><DeliveryAddressIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeliveryAddressIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><FilterResetIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<FilterResetIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><IdealIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<IdealIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><InvoiceAddressIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddressIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><InvoiceAddressIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddressIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><MultipleSourcesIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<MultipleSourcesIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PayPalIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPalIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PayPalIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPalIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><PhoneBlockIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<PhoneBlockIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><RatePayIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<RatePayIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><TestIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<TestIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShopIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShopBidAgentIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBidAgentIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
              <Grid item xs={4}><ListItem>
                <ListItemAvatar><WebShopBlockIcon /></ListItemAvatar>
                <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBlockIcon />`}</CodeBox></ListItemText>
              </ListItem></Grid>
            </Grid>
            <Box mt={2}>
              <Typography variant={'h6'}>Icon Usage</Typography>
              <CodeBox>
                <Box component={Typography}>{`import { BadgePercent } from 'Core/Component/Icon';`}</Box>
                <Box component={Typography}>{`const style = ({`}</Box>
                <Box pl={1} component={Typography}>{`icon: {`}</Box>
                <Box pl={2} component={Typography}>{`fontSize: definition.typography.pxToRem(32),`}</Box>
                <Box pl={2} component={Typography}>{`color: definition.palette.secondary.main`}</Box>
                <Box pl={1} component={Typography}>{`}`}</Box>
                <Box>{` });`}</Box>
                <Box component={Typography}>{`const theme = useTheme();`}</Box>
              </CodeBox>
              <List>
                <ListItem>
                  <ListItemAvatar><BadgePercentIcon /></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon />`}</CodeBox></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Box component={BadgePercentIcon} color='secondary.main' fontSize={definition.typography.pxToRem(32)} />
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Box component={BadgePercentIcon} color='secondary.main' fontSize={definition.typography.pxToRem(32)} />`}</CodeBox>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon style={{ fontSize: definition.typography.pxToRem(32), color: definition.palette.secondary.main }} />
                  </ListItemAvatar>
                  <ListItemText><CodeBox component={'span'}
                    size={'small'}>{`<BadgePercentIcon style={{ fontSize: definition.typography.pxToRem(32), color :definition.palette.secondary.main }} />`}</CodeBox></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon sx={sxs.icon} />
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon className={classes.icon} />`}</CodeBox>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Typography variant={'h4'} color='secondary'> <BadgePercentIcon /></Typography>
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Typography variant={'h4'} color='secondary'><BadgePercentIcon /></Typography>`}</CodeBox>
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
                  <Grid item><BadgePercentIcon sx={iconColor === 'reactMd' ? { color: `${definition.palette.common.black}80` } : null} /></Grid>
                  <Grid item><DoneIcon color={'secondary'} /></Grid>
                  <Grid item><WebShopBidAgentIcon color={'primary'} /></Grid>
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
