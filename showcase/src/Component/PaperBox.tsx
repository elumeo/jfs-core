import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import { Box, Paper,CardHeader, CardContent, Typography } from '@material-ui/core';
import { withStyles, Theme, WithStyles} from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { useTheme } from '@material-ui/core/styles';
import PriceInput from '@elumeo/jfs-core/build/Component/PriceInput'
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})
const PaperBox :React.FC<Props> = ({
    classes
    }) => {
  const { formatMessage } = useIntl(); 
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
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
        <PriceInput onChange={e => setValue(parseFloat(e.target.value))} value={value}/>
      </CardContent>
    </Box>
  );
};
export default withStyles(style)(PaperBox);