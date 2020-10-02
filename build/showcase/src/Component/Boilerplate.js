import React from 'react';
import Grid from 'react-md/lib/Grids/Grid';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Toolbar from 'react-md/lib/Toolbars';
import CardActions from 'react-md/lib/Cards/CardActions';
import { connect } from 'react-redux';
import Search from '../../../Component/Search';
import DialogExample from '../../../Component/DialogExample';
import AddToastButton from '../../../Component/AddToastButton';
import LoremIpsumText from '../../../Component/LoremIpsumText';
import AddNotificationButton from '../../../Component/AddNotificationButton';
import { parallelAsyncLoopExampleRequestAction } from '../../../Store/Action/parallelAsyncLoopExampleAction';
import JscWebSocketExampleButton from '../../../Component/JscWebSocketPingButton';
import JscWebSocketCurrentGameButton from '../../../Component/JscWebSocketCurrentGameButton';
import JfsWebSocketExampleButton from '../../../Component/JfsWebSocketPingButton';
import { injectIntl } from 'react-intl';
import DatePicker from '@elumeo/jfs-core/build/Component/DatePicker';
import FormattedMessage from '@elumeo/jfs-core/build/Component/FormattedMessage';
// const { SharedHelloWorld } = Shared.mount((state: IRootReducer) => state.helloWorldReducer);
class Boilerplate extends React.Component {
    componentDidMount() {
        this.props.parallelAsyncLoopExampleRequestAction(['1', '2', '3', '4', '5', '6']);
    }
    render() {
        const { intl: { formatMessage } } = this.props;
        return (React.createElement(Grid, null,
            React.createElement(Card, { className: 'md-block-centered' },
                React.createElement(Toolbar, null,
                    React.createElement(Search, { id: 'ToolbarSearchExample', labelTranslationId: 'app.search', style: { width: '100%' } })),
                React.createElement(CardTitle, { title: formatMessage({ id: 'app.title' }), subtitle: formatMessage({ id: 'app.hello' }) }),
                React.createElement(CardText, null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement("code", null, "CardText"),
                        " component is really just useful for displaying any content with some additional padding."),
                    React.createElement(LoremIpsumText, { lines: 40 })),
                React.createElement(CardActions, null,
                    React.createElement(DialogExample, null),
                    React.createElement(AddToastButton, null),
                    React.createElement(AddNotificationButton, null),
                    React.createElement(JfsWebSocketExampleButton, null),
                    React.createElement(JscWebSocketCurrentGameButton, null),
                    React.createElement(JscWebSocketExampleButton, null),
                    React.createElement(DatePicker, { value: new Date }),
                    React.createElement(FormattedMessage, { id: 'configurable.message', values: {
                            text: 'TEST123',
                            other: (React.createElement("u", null,
                                React.createElement("i", null, "Ich bin ein unterstrichener, kursiver, fetter Text")))
                        } })))));
    }
}
export default injectIntl(connect(null, { parallelAsyncLoopExampleRequestAction })(Boilerplate));
//# sourceMappingURL=Boilerplate.js.map