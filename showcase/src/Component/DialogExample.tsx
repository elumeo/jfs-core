import * as React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import LoremIpsumText from "Component/LoremIpsumText";
import Overlay from '@elumeo/jfs-core/build/Component/Overlay';

const DialogExample: React.FC = () => {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [withOverlay, setWithOverlay] = React.useState(false);
  const intl = useIntl();
  const { formatMessage } = intl;
  const Dialog =
    <MUI.Dialog
      disablePortal
      open={dialogVisible}
      onClose={() => false}
      aria-labelledby='add-credit-card-dialog'>
      <MUI.DialogContent>
        <LoremIpsumText lines={5} />
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button onClick={() => setDialogVisible(false)}>
          {formatMessage({ id: 'Close Dialog' })}
        </MUI.Button>
        <MUI.Button onClick={() => setWithOverlay(!withOverlay)}>
          toggle overlay
        </MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>

  return (<>
    {withOverlay
      ? <Overlay> {Dialog}</Overlay>
      :
      Dialog}
    <MUI.Button onClick={() => setDialogVisible(true)}>
      {formatMessage({ id: 'Open Dialog' })} withoverlay? :{withOverlay.toString()}
    </MUI.Button>
  </>
  );
}

export default DialogExample;
