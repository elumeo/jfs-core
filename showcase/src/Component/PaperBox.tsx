import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import { Box, Paper, CardHeader, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import FolderIcon from '@material-ui/icons/Folder';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { useTheme } from '@material-ui/core/styles';
import PriceInput from '@elumeo/jfs-core/build/Component/PriceInput'
function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})
const PaperBox: React.FC<Props> = ({
  classes
}) => {
  const { formatMessage } = useIntl();
  const theme = useTheme()
  const [value, setValue] = React.useState<React.ReactText>()
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)
  return (
    <Box component={Paper}>
      <CardHeader
        title='This is a paper'
        subheader='This Paper is wrapped by a Box' />
      <CardContent>
        <Typography
          variant='subtitle1'>
        </Typography>
        <Typography>Boxes are useful to apply stylings</Typography>
        <PriceInput onChange={e => setValue(e.target.value)} value={value} />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' className={classes.title} onClick={() => setDense(!dense)}>
                Text only  {dense ? <ExpandMore /> : <ExpandLess />}
              </Typography>
              <List dense={dense}>
                {generate(
                  <ListItem button onClick={() => setSecondary(!secondary)}>
                    <ListItemText
                      primary={'Single-line item ' + (dense ? '(dense)' : '')}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' className={classes.title} onClick={() => setDense(!dense)}>
                Icon with text {dense ? <ExpandLess /> : <ExpandMore />}
              </Typography>
              <List dense={dense}>
                {generate(
                  <ListItem button onClick={() => setSecondary(!secondary)}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Single-line item ' + (dense ? '(dense)' : '')}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Box>
  );
};
export default withStyles(style)(PaperBox);