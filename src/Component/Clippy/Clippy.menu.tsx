import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, } from '@mui/material';
import React from 'react'
// import clippy from 'clippyts';
// import useTheme from 'Component/App/Stateless/Style/Theme/useTheme'
import { savePreferredClippyVariant } from 'Store/Action';
import { useDispatch } from 'react-redux';
import useClippy, { ClippyVariant } from '../../Effect/useClippy';
import { type Agent, AGENTS } from 'Types/Clippy.type';
const ClippyMenu: React.FC = () => {
  const { variant, agent } = useClippy()
  const dispatch = useDispatch()
  const handleChange =
    (event: SelectChangeEvent<ClippyVariant>,) => {
      agent.hide(true, () => dispatch(savePreferredClippyVariant(event.target.value as Agent)));
    }


  return <FormControl fullWidth >
    <InputLabel id='clippy-picker-label'>Helferlein wählen</InputLabel>
    <Select<ClippyVariant>
      value={variant}
      // disabled={!!agent}
      onChange={handleChange}
    >
      {
        AGENTS
          .map((agentName) =>
            <MenuItem
              key={agentName}
              value={agentName}>
              {agentName}
            </MenuItem>
          )
      }
    </Select >
  </FormControl>
}
export default ClippyMenu
