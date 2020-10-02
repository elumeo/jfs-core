import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Dialog from 'react-md/lib/Dialogs';
import { injectIntl } from 'react-intl';
import LoremIpsumText from "../../../Component/LoremIpsumText";
class DialogExample extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { dialogVisible: false };
    }
    render() {
        const { intl: { formatMessage } } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(Dialog, { id: 'TestDialogContainer', visible: this.state.dialogVisible, onHide: () => false, focusOnMount: false, "aria-labelledby": 'add-credit-card-dialog', actions: React.createElement("div", null,
                    React.createElement(Button, { flat: true, onClick: () => this.setState({ dialogVisible: false }) }, formatMessage({ id: 'Close Dialog' }))) },
                React.createElement("br", null),
                React.createElement(LoremIpsumText, { lines: 5 })),
            React.createElement(Button, { flat: true, onClick: () => this.setState({ dialogVisible: true }) }, formatMessage({ id: 'Open Dialog' }))));
    }
}
export default injectIntl(DialogExample);
//# sourceMappingURL=DialogExample.js.map