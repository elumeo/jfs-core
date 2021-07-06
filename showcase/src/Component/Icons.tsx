import React from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { withStyles, Theme, WithStyles, useTheme } from '@material-ui/core/styles';
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
} from 'Core/Component/Icon'
import WarningIcon from '@material-ui/icons/Warning'
import AppNavigation from 'Component/AppNavigation';

type Props = {} & WithStyles
const style = (theme: Theme) => ({
  icon: {
    fontSize: theme.typography.pxToRem(32),
    color: theme.palette.secondary.main
  }
})
const Icons: React.FC<Props> = ({classes}) => {
  const theme = useTheme()

  return (<Grid container>
      <Grid item xs={2}>
        <AppNavigation/>
      </Grid>
      <Grid item xs>
        <Box component={Container}>
          <Box component={Card}>
            <CardHeader title='Juwelo Icons'/>
            <Box component={CardContent}>
              <Grid container>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WarningIcon/></ListItemAvatar>
                  <ListItemText>An Material UI Icon example</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BadgePercentIcon/></ListItemAvatar>
                  <ListItemText>{`<BadgePercentIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BidBlockIcon/></ListItemAvatar>
                  <ListItemText>{`<BidBlockIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BoxOpenIcon/></ListItemAvatar>
                  <ListItemText>{`<BoxOpenIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CashInAdvanceIcon/></ListItemAvatar>
                  <ListItemText>{`<CashInAdvanceIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CashOnDeliveryIcon/></ListItemAvatar>
                  <ListItemText>{`<CashOnDeliveryIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CheckIcon/></ListItemAvatar>
                  <ListItemText>{`<CheckIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><DeletePinIcon/></ListItemAvatar>
                  <ListItemText>{`<DeletePinIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><DeliveryAddressIcon/></ListItemAvatar>
                  <ListItemText>{`<DeliveryAddressIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><FilterResetIcon/></ListItemAvatar>
                  <ListItemText>{`<FilterResetIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><IdealIcon/></ListItemAvatar>
                  <ListItemText>{`<IdealIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><InvoiceAddressIcon/></ListItemAvatar>
                  <ListItemText>{`<InvoiceAddressIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><InvoiceAddressIcon/></ListItemAvatar>
                  <ListItemText>{`<InvoiceAddressIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><MultipleSourcesIcon/></ListItemAvatar>
                  <ListItemText>{`<MultipleSourcesIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PayPalIcon/></ListItemAvatar>
                  <ListItemText>{`<PayPalIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PayPalIcon/></ListItemAvatar>
                  <ListItemText>{`<PayPalIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PhoneBlockIcon/></ListItemAvatar>
                  <ListItemText>{`<PhoneBlockIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><RatePayIcon/></ListItemAvatar>
                  <ListItemText>{`<RatePayIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><TestIcon/></ListItemAvatar>
                  <ListItemText>{`<TestIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopIcon/></ListItemAvatar>
                  <ListItemText>{`<WebShopIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopBidAgentIcon/></ListItemAvatar>
                  <ListItemText>{`<WebShopBidAgentIcon />`}</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopBlockIcon/></ListItemAvatar>
                  <ListItemText>{`<WebShopBlockIcon />`}</ListItemText>
                </ListItem></Grid>
              </Grid>
            </Box>
            <CardHeader title='Icon Usage' subheader={`import { BadgePercent }  from 'Core/Component/Icon'`}/>
            <Box component={CardContent}>

              <Box component={Typography}>{`const style = (theme: Theme) => ({`}</Box>
              <Box pl={2} component={Typography}>{`icon: {`}</Box>
              <Box pl={4} component={Typography}>{`fontSize: theme.typography.pxToRem(32),`}</Box>
              <Box pl={4} component={Typography}>{`color: theme.palette.secondary.main`}</Box>
              <Box pl={2} component={Typography}>{`}`}</Box>
              <Box>{` })`}</Box>

              <Typography>const theme = useTheme()</Typography>
              <List>

                <ListItem>
                  <ListItemAvatar><BadgePercentIcon/></ListItemAvatar>
                  <ListItemText>{` <BadgePercentIcon />`}</ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Box component={BadgePercentIcon} color='secondary.main' fontSize={theme.typography.pxToRem(32)}/>
                  </ListItemAvatar>
                  <ListItemText>
                    {`<Box component={BadgePercentIcon} color='secondary.main' fontSize={theme.typography.pxToRem(32)} />`}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon style={{fontSize: theme.typography.pxToRem(32), color: theme.palette.secondary.main}}/>
                  </ListItemAvatar>
                  <ListItemText>{`<BadgePercentIcon style={{ fontSize: theme.typography.pxToRem(32), color :theme.palette.secondary.main }} />`}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon className={classes.icon}/>
                  </ListItemAvatar>
                  <ListItemText>
                    {`<BadgePercentIcon className={classes.icon} />`}
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Typography variant={'h4'} color='secondary'> <BadgePercentIcon/></Typography>
                  </ListItemAvatar>
                  <ListItemText>
                    {`<Typography variant={'h4'} color='secondary'> <BadgePercentIcon/></Typography>`}
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default withStyles(style)(Icons);
