import React from 'react';
import { Box, Card, CardContent, CardHeader, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { withStyles, Theme, WithStyles, useTheme } from '@material-ui/core/styles';
import { BadgePercent as BadgePercentIcon } from 'Core/Component/Icon'

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
          <BadgePercentIcon />
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
              <ListItemAvatar><BadgePercentIcon/>
              </ListItemAvatar>
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
