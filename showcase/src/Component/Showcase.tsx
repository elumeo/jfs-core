import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import * as Action from 'Store/Action';
import DialogExample from 'Component/DialogExample';
import AddToastButton from 'Component/AddToastButton';
import LoremIpsumText from 'Component/LoremIpsumText';
import AddNotificationButton from 'Component/AddNotificationButton';
import JscWebSocketExampleButton from 'Component/JscWebSocketPingButton';
import JscWebSocketCurrentGameButton from 'Component/JscWebSocketCurrentGameButton';
import JfsWebSocketExampleButton from 'Component/JfsWebSocketPingButton';
import * as MUIPickers from '@material-ui/pickers';

import { HelloWorld } from 'jfc-hello-world/build';

const Showcase: React.FC = () => {
  const intl = useIntl();
  const { formatMessage } = intl;
  const [ date, setDate] = React.useState(new Date())

  React.useEffect(
    () => {
      Action.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6'])
    },
    []
  );

  return (
    <MUI.Card style={{
      marginTop: 32,
      marginLeft: 48,
      marginRight: 48,
      boxSizing: 'border-box'
    }}>
      <MUI.CardHeader
        title={formatMessage({id: 'app.title'})}
        subtitle={formatMessage({id: 'app.hello'})}/>
      <MUI.CardContent>
        <p>
          The <code>CardText</code> component is really just useful for
          displaying any content with some additional padding.
        </p>
        <LoremIpsumText lines={20}/>
        <HelloWorld/>
      </MUI.CardContent>
      <MUI.CardActions>
        <DialogExample/>
        <AddToastButton/>
        <AddNotificationButton/>
        <JfsWebSocketExampleButton/>
        <JscWebSocketExampleButton/>
        <JscWebSocketCurrentGameButton/>
        <MUIPickers.DatePicker value={date} onChange={setDate}/>
      </MUI.CardActions>
    </MUI.Card>
  );
}

export default Showcase;
