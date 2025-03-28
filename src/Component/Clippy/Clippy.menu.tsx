import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, } from '@mui/material';
import React from 'react'
import { clippySaveAgent } from 'Store/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Agent, AGENTS } from 'Types/Clippy.type';
import { pickPreferredClippyVariant } from 'Store/Selector/Core/ClippyConfig.selector';

const ClippyMenu: React.FC = () => {
  const variant = useSelector(pickPreferredClippyVariant)
  const dispatch = useDispatch()
  const handleChange = React.useCallback(
    (event: SelectChangeEvent<Agent>,) => {
      dispatch(clippySaveAgent(event.target.value as Agent))
    }, [dispatch]
  )

  return <FormControl fullWidth >
    <InputLabel id='clippy-picker-label'>Helferlein wählen</InputLabel>
    <Select<Agent>
      value={variant}
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
