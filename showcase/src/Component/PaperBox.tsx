import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, Theme, WithStyles, useTheme } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import FolderIcon from '@material-ui/icons/Folder';
import { colors as bgColors } from './Background'
import { colors as textColors } from './Typo'
const generate = (element: React.ReactElement) => {
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
  const [dense, setDense] = React.useState(false)
  const [bgColor, setBgColor] = React.useState(bgColors[0])
  const [textColor, setTextColor] = React.useState(textColors[0])
  const [secondary, setSecondary] = React.useState(false)
  const toggleDense = () => {
    setDense(!dense)
  }
  const toggleBg = () => {
    return setBgColor(bgColors[Math.floor(Math.random() * (bgColors.length - 1)) + 1])
  }
  const toggleText = () => {
    return setTextColor(textColors[Math.floor(Math.random() * (textColors.length - 1)) + 1])

  }
  return (
    <Box component={Card} width='100%'>
      <CardHeader
        title='This is a paper'
        subheader='This Paper is wrapped by a Box' />
      <CardContent>
        <Typography
          variant='body1'>
          Boxes are useful to apply stylings
        </Typography>
        <Box display='flex' gridGap={theme.spacing(1)}>

          <Button size={dense ? 'small' : 'medium'} variant='contained' onClick={toggleBg}>border</Button>
          <Button size={dense ? 'small' : 'medium'} variant='contained' onClick={toggleText}>textColor</Button>
          <FormControlLabel control={<Switch onChange={toggleDense} value={dense} size={dense ? 'small' : 'medium'} />} label='dense' />
        </Box>
        <Box border='1px solid' borderColor={bgColor}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' className={classes.title} color={textColor}>
                Text only  {dense ? 'dense' : ''}
              </Typography>
              <List dense={dense} subheader={<ListSubheader>borderColor: {bgColor}</ListSubheader>}>
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
              <Typography variant='h6' className={classes.title} color={textColor}>
                Icon with text {dense ? 'dense' : ''}
              </Typography>
              <List dense={dense} subheader={<ListSubheader> textColor: {textColor}</ListSubheader>} >
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