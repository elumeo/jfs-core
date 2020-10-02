import React from 'react';
import Grid from 'react-md/lib/Grids/Grid';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Toolbar from 'react-md/lib/Toolbars';
import CardActions from 'react-md/lib/Cards/CardActions';

import { connect } from 'react-redux';
import Search from 'Component/Search';
import DialogExample from 'Component/DialogExample';
import AddToastButton from 'Component/AddToastButton';
import LoremIpsumText from 'Component/LoremIpsumText';
import AddNotificationButton from 'Component/AddNotificationButton';
import { parallelAsyncLoopExampleRequestAction } from 'Action/parallelAsyncLoopExampleAction';
import JscWebSocketExampleButton from 'Component/JscWebSocketPingButton';
import JscWebSocketCurrentGameButton from 'Component/JscWebSocketCurrentGameButton';
import JfsWebSocketExampleButton from 'Component/JfsWebSocketPingButton';
import { injectIntl, InjectedIntl } from 'react-intl';
import DatePicker from 'Core/Component/DatePicker';

import FormattedMessage from 'Core/Component/FormattedMessage';

export interface IBoilerplateProps {
  intl?: InjectedIntl;
  parallelAsyncLoopExampleRequestAction?: typeof parallelAsyncLoopExampleRequestAction;
}

// const { SharedHelloWorld } = Shared.mount((state: IRootReducer) => state.helloWorldReducer);

class Boilerplate extends React.Component<IBoilerplateProps> {

  componentDidMount(): void {
    this.props.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6']);
  }

  render() {
    const {intl: {formatMessage}} = this.props;

    return (
      <Grid>
        <Card className='md-block-centered'>
          <Toolbar>
            <Search
              id={'ToolbarSearchExample'}
              labelTranslationId={'app.search'}
              style={{width: '100%'}}
            />
          </Toolbar>
          <CardTitle
            title={formatMessage({id: 'app.title'})}
            subtitle={formatMessage({id: 'app.hello'})}/>
          <CardText>
            <p>
              The <code>CardText</code> component is really just useful for displaying any content with some additional
              padding.
            </p>
            <LoremIpsumText lines={40}/>
            {/* {<SharedHelloWorld/>} */}
          </CardText>
          <CardActions>
            <DialogExample/>
            <AddToastButton/>
            <AddNotificationButton/>
            <JfsWebSocketExampleButton/>
            <JscWebSocketCurrentGameButton/>
            <JscWebSocketExampleButton/>
            <DatePicker value={new Date}/>
            <FormattedMessage
              id='configurable.message'
              values={{
                text: 'TEST123',
                other: (
                  <u>
                    <i>
                      Ich bin ein unterstrichener, kursiver, fetter Text
                    </i>
                  </u>
                )
              }}/>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default injectIntl(
  connect(
    null,
    { parallelAsyncLoopExampleRequestAction }
  )(Boilerplate)
);
