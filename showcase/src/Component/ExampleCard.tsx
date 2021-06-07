import React from 'react';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';
import * as MUI from '@material-ui/core';
import DialogExample from 'Component/DialogExample';
import { HelloWorld } from 'jfc-hello-world/build';
import AddToastButton from 'Component/AddToastButton';
import LoremIpsumText from 'Component/LoremIpsumText';
import AddNotificationButton from 'Component/AddNotificationButton';
import * as MUIPickers from '@material-ui/pickers';
import JscWebSocketExampleButton from 'Component/JscWebSocketPingButton';
import JscWebSocketCurrentGameButton from 'Component/JscWebSocketCurrentGameButton';
import JfsWebSocketExampleButton from 'Component/JfsWebSocketPingButton';
import { Box } from '@material-ui/core';
import { withStyles, Theme, WithStyles} from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
type Props = {
} & WithStyles
const style = (theme: Theme) => ({})
const ExampleCard :React.FC<Props> = ({
classes
}) => {
  const { formatMessage } = useIntl();
  const [date, setDate] = React.useState(new Date())
  return (
    <MUI.Box
    flexGrow={1}
    component={MUI.Card}>
    <MUI.CardHeader
      title={'This is a Card '}
      subheader
      ={formatMessage({ id: 'app.hello' })} />
    <MUI.CardContent >
      <MUI.Typography
        variant='body1'>
        The <MUI.Typography
          variant='caption'>CardText</MUI.Typography> component is really just useful for
          displaying any content with some additional padding.
        </MUI.Typography>
      <LoremIpsumText lines={20} />
      <HelloWorld />
    </MUI.CardContent>
    <MUI.CardActions>
      <DialogExample />
      <AddToastButton />
      <AddNotificationButton />
      <JfsWebSocketExampleButton />
      <JscWebSocketExampleButton />
      <JscWebSocketCurrentGameButton />
      <MUIPickers.DatePicker value={date} onChange={setDate} />
    </MUI.CardActions>
  </MUI.Box>
  );
};
export default withStyles(style)(ExampleCard);