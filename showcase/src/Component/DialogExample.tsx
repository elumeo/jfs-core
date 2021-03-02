import * as React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialogs';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import LoremIpsumText from "Component/LoremIpsumText";

interface IDialogExampleState {
  dialogVisible: boolean;
}

class DialogExample extends React.Component<InjectedIntlProps, IDialogExampleState> {
  state = { dialogVisible: false };

  render() {
    const { intl: { formatMessage } } = this.props;
    return (
      <>
        <Dialog
          id='TestDialogContainer'
          visible={this.state.dialogVisible}
          onHide={() => false}
          focusOnMount={false}
          aria-labelledby='add-credit-card-dialog'
          actions={
            <div>
              <Button
                flat
                onClick={() => this.setState({ dialogVisible: false })}>
                {formatMessage({ id: 'Close Dialog' })}
              </Button>
            </div>
          }>
          <br/>
          <LoremIpsumText lines={5}/>
        </Dialog>
        <Button
          flat
          onClick={() => this.setState({ dialogVisible: true })}>
          {formatMessage({ id: 'Open Dialog' })}
        </Button>
      </>
    );
  }
}

export default injectIntl(DialogExample);
