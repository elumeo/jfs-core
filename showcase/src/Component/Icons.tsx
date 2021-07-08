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
import CodeBox from 'Component/CodeBox';

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
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='Juwelo Icons'/>
            <Box component={CardContent}>
              <Grid container>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WarningIcon/></ListItemAvatar>
                  <ListItemText>An Material UI Icon example</ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BadgePercentIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BidBlockIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BidBlockIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><BoxOpenIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BoxOpenIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CashInAdvanceIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashInAdvanceIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CashOnDeliveryIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<CashOnDeliveryIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><CheckIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<CheckIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><DeletePinIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeletePinIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><DeliveryAddressIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<DeliveryAddressIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><FilterResetIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<FilterResetIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><IdealIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<IdealIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><InvoiceAddressIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddressIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><InvoiceAddressIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<InvoiceAddressIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><MultipleSourcesIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<MultipleSourcesIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PayPalIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPalIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PayPalIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<PayPalIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><PhoneBlockIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<PhoneBlockIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><RatePayIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<RatePayIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><TestIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<TestIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopBidAgentIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBidAgentIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
                <Grid item xs={4}><ListItem>
                  <ListItemAvatar><WebShopBlockIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<WebShopBlockIcon />`}</CodeBox></ListItemText>
                </ListItem></Grid>
              </Grid>
            </Box>
            <CardHeader title='Icon Usage'/>
            <Box component={CardContent}>
              <CodeBox>
                <Box component={Typography}>{`import { BadgePercent } from 'Core/Component/Icon';`}</Box>
                <Box component={Typography}>{`const style = (theme: Theme) => ({`}</Box>
                <Box pl={1} component={Typography}>{`icon: {`}</Box>
                <Box pl={2} component={Typography}>{`fontSize: theme.typography.pxToRem(32),`}</Box>
                <Box pl={2} component={Typography}>{`color: theme.palette.secondary.main`}</Box>
                <Box pl={1} component={Typography}>{`}`}</Box>
                <Box>{` });`}</Box>
                <Box component={Typography}>{`const theme = useTheme();`}</Box>
              </CodeBox>
              <List>

                <ListItem>
                  <ListItemAvatar><BadgePercentIcon/></ListItemAvatar>
                  <ListItemText><CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon />`}</CodeBox></ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Box component={BadgePercentIcon} color='secondary.main' fontSize={theme.typography.pxToRem(32)}/>
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Box component={BadgePercentIcon} color='secondary.main' fontSize={theme.typography.pxToRem(32)} />`}</CodeBox>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon style={{fontSize: theme.typography.pxToRem(32), color: theme.palette.secondary.main}}/>
                  </ListItemAvatar>
                  <ListItemText><CodeBox component={'span'}
                                         size={'small'}>{`<BadgePercentIcon style={{ fontSize: theme.typography.pxToRem(32), color :theme.palette.secondary.main }} />`}</CodeBox></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <BadgePercentIcon className={classes.icon}/>
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<BadgePercentIcon className={classes.icon} />`}</CodeBox>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Typography variant={'h4'} color='secondary'> <BadgePercentIcon/></Typography>
                  </ListItemAvatar>
                  <ListItemText>
                    <CodeBox component={'span'} size={'small'}>{`<Typography variant={'h4'} color='secondary'> <BadgePercentIcon/></Typography>`}</CodeBox>
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default withStyles(style)(Icons);
