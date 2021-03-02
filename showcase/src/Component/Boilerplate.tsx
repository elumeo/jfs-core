import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
// import Search from '@elumeo/jfs-core/build/Component/Search/SearchComponent';
import DialogExample from 'Component/DialogExample';
import AddToastButton from 'Component/AddToastButton';
import LoremIpsumText from 'Component/LoremIpsumText';
import AddNotificationButton from 'Component/AddNotificationButton';
import { parallelAsyncLoopExampleRequestAction } from 'Action/parallelAsyncLoopExampleAction';
import JscWebSocketExampleButton from 'Component/JscWebSocketPingButton';
import JscWebSocketCurrentGameButton from 'Component/JscWebSocketCurrentGameButton';
import JfsWebSocketExampleButton from 'Component/JfsWebSocketPingButton';

export interface Props {
  parallelAsyncLoopExampleRequestAction?: typeof parallelAsyncLoopExampleRequestAction;
}

// const { SharedHelloWorld } = Shared.mount((state: IRootReducer) => state.helloWorldReducer);

const Boilerplate: React.FC<Props> = () => {
  const intl = useIntl();
  const { formatMessage } = intl;

  React.useEffect(
    () => {
      parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6'])
    },
    []
  );

  return (
    <MUI.Grid>
      <MUI.Card className='md-block-centered'>
        <MUI.Toolbar>
          {/*<Search
            id='ToolbarSearchExample'
            labelTranslationId={'app.search'}
            style={{width: '100%'}}/>*/}
        </MUI.Toolbar>
        <MUI.CardHeader
          title={formatMessage({id: 'app.title'})}
          subtitle={formatMessage({id: 'app.hello'})}/>
        <MUI.CardContent>
          <p>
            The <code>CardText</code> component is really just useful for displaying any content with some additional
            padding.
          </p>
          <LoremIpsumText lines={40}/>
          {/* {<SharedHelloWorld/>} */}
        </MUI.CardContent>
        <MUI.CardActions>
          <DialogExample/>
          <AddToastButton/>
          <AddNotificationButton/>
          <JfsWebSocketExampleButton/>
          <JscWebSocketCurrentGameButton/>
          <JscWebSocketExampleButton/>
          {/*<MUI.DatePicker value={new Date}/>*/}
        </MUI.CardActions>
      </MUI.Card>
    </MUI.Grid>
  );
}

export default Boilerplate;
