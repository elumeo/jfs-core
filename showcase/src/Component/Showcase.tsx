import React from 'react';
import * as MUI from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
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
  const theme = useTheme()
  const [date, setDate] = React.useState(new Date())

  React.useEffect(
    () => {
      Action.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6'])
    },
    []
  );

  return (
    <MUI.Box
      gridGap={theme.spacing(1)}
      display='flex'
      width='100%'
      flexDirection='row'>
      <MUI.Box component={MUI.Paper} flexGrow={1}>
        <MUI.CardHeader title='Typographies (Component: CardHeader {Prop: title})' subheader={'(h1-6, body1-2, subtitle1-2, caption)  (Component: CardHeader {Prop: subheader}'}/>
        <MUI.CardContent>
          <MUI.Typography
            variant='subtitle1'
            component='span'
          >
            <>You can pass different pre-defined descriptors
             to the
            <MUI.Typography
                variant='caption'> variant</MUI.Typography> property of the Typography.
                </>
          </MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h1'>variant='h1'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h2'>variant='h2'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h3'>variant='h3'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h4'>variant='h4'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h5'>variant='h5'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='h6'>variant='h6'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='subtitle1'>variant='subtitle1'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='subtitle2'>variant='subtitle2'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='body1'>variant='body1'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='body2'>variant='body2'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='button'>variant='button'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='caption'>variant='caption'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='srOnly'>variant='srOnly'</MUI.Typography>
          <MUI.Typography
            component='li'
            variant='overline'>variant='overline'</MUI.Typography>
          <MUI.Typography> We should define custom Typography styles by defining new variant types.</MUI.Typography>
        </MUI.CardContent>
        <>text without typography in Paper and outside CardContent</>
      </MUI.Box>
      <MUI.Box
        flexGrow={1}
        display='flex'
        flexDirection='column'
        gridGap={theme.spacing(1)}
        maxWidth='50%' >
        <MUI.Box component={MUI.Paper}>
          <MUI.CardHeader
            title='This is a paper'
            subheader='This Paper is wrapped by a Box' />
          <MUI.CardContent>
            <MUI.Typography
              variant='subtitle1'>

            </MUI.Typography>
            <MUI.Typography>Boxes are useful to apply stylings</MUI.Typography>
          </MUI.CardContent>
        </MUI.Box>

        <MUI.Box
          flexGrow={1}
          component={MUI.Card}
        >
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

      </MUI.Box>
    </MUI.Box>
  );
}

export default Showcase;
