import React from 'react';
import { Box, Card, CardContent, CardHeader, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { withStyles, Theme, WithStyles, useTheme } from '@material-ui/core/styles';
import {
  Apple as AppleIcon,
  BadgePercent as BadgePercentIcon,
  BidBlock as BidBlockIcon,
  BoxOpen as BoxOpenIcon,
  CashInAdvance as CashInAdvanceIcon,
  CashOnDelivery as CashOnDeliveryIcon,
  Check as CheckIcon,
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

type Props = {} & WithStyles
const style = (theme: Theme) => ({
  icon: {
    fontSize: theme.typography.pxToRem(32),
    color: theme.palette.secondary.main
  }
})
const Icon: React.FC<Props> = ({classes}) => {
  const theme = useTheme()

  return (
    <Box component={Container} height='100%' maxHeight='100%'>
      <Box component={Card} height='100%'>
        <CardHeader title='Juwelo Icons'/>
        <Box component={CardContent}>
          <List>
            <ListItem>
              <ListItemAvatar><WarningIcon/></ListItemAvatar>
              <ListItemText>An Material UI Icon example</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><AppleIcon/></ListItemAvatar>
              <ListItemText>{`<AppleIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><BadgePercentIcon/></ListItemAvatar>
              <ListItemText>{`<BadgePercentIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><BidBlockIcon/></ListItemAvatar>
              <ListItemText>{`<BidBlockIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><BoxOpenIcon/></ListItemAvatar>
              <ListItemText>{`<BoxOpenIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><CashInAdvanceIcon/></ListItemAvatar>
              <ListItemText>{`<CashInAdvanceIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><CashOnDeliveryIcon/></ListItemAvatar>
              <ListItemText>{`<CashOnDeliveryIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><CheckIcon/></ListItemAvatar>
              <ListItemText>{`<CheckIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><DeliveryAddressIcon/></ListItemAvatar>
              <ListItemText>{`<DeliveryAddressIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><FilterResetIcon/></ListItemAvatar>
              <ListItemText>{`<FilterResetIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><IdealIcon/></ListItemAvatar>
              <ListItemText>{`<IdealIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><InvoiceAddressIcon/></ListItemAvatar>
              <ListItemText>{`<InvoiceAddressIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><MultipleSourcesIcon/></ListItemAvatar>
              <ListItemText>{`<MultipleSourcesIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><PayPalIcon/></ListItemAvatar>
              <ListItemText>{`<PayPalIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><PhoneBlockIcon/></ListItemAvatar>
              <ListItemText>{`<PhoneBlockIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><RatePayIcon/></ListItemAvatar>
              <ListItemText>{`<RatePayIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><TestIcon/></ListItemAvatar>
              <ListItemText>{`<TestIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><WebShopIcon/></ListItemAvatar>
              <ListItemText>{`<WebShopIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><WebShopBidAgentIcon/></ListItemAvatar>
              <ListItemText>{`<WebShopBidAgentIcon />`}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar><WebShopBlockIcon/></ListItemAvatar>
              <ListItemText>{`<WebShopBlockIcon />`}</ListItemText>
            </ListItem>
          </List>
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
                <Box component={BadgePercentIcon} color='secondary.main' fontSize={theme.typography.pxToRem(32)} />
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
  );
};
export default withStyles(style)(Icon);
