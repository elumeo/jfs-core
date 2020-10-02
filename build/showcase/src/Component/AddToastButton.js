import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'react-md/lib/Buttons/Button';
import { addToastAction } from '@elumeo/jfs-core/build/Store/Action/ToastAction';
import { injectIntl } from 'react-intl';
class AddToastButton extends React.Component {
    render() {
        const { intl: { formatMessage } } = this.props;
        return (React.createElement(Button, { flat: true, onClick: () => this.props.addToastAction({ contentMessage: 'Hi, I\'ve been slide up here.' }) }, formatMessage({ id: 'Add Toast' })));
    }
}
const enhance = compose(connect(null, { addToastAction }), injectIntl);
export default enhance(AddToastButton);
//# sourceMappingURL=AddToastButton.js.map