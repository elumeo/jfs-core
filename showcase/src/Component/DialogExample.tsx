import * as React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import LoremIpsumText from "Component/LoremIpsumText";

const DialogExample: React.FC = () => {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const intl = useIntl();
  const { formatMessage } = intl;
  return (
    <>
      <MUI.Dialog
        id='example-dialog'
        open={dialogVisible}
        onClose={() => false}
        aria-labelledby='add-credit-card-dialog'>
        <MUI.DialogContent>
          <br/>
          <LoremIpsumText lines={5}/>
        </MUI.DialogContent>
        <MUI.DialogActions>
          <MUI.Button onClick={() => setDialogVisible(false)}>
            {formatMessage({ id: 'Close Dialog' })}
          </MUI.Button>
        </MUI.DialogActions>
      </MUI.Dialog>
      <MUI.Button onClick={() => setDialogVisible(true)}>
        {formatMessage({ id: 'Open Dialog' })}
      </MUI.Button>
    </>
  );
}

export default DialogExample;
