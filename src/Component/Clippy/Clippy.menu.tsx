import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, } from '@mui/material';
import React from 'react'
import { clippySaveAgent } from 'Store/Action';
import { useDispatch, useSelector } from 'react-redux';
import { type Agent, AGENTS } from 'Types/Clippy.type';
import { pickClippyVariant } from 'Store/Selector/Core/ClippyConfig.selector';
import { AgentType } from 'clippyts/dist/types';
const ClippyMenu: React.FC = () => {
  const variant = useSelector(pickClippyVariant)
  const dispatch = useDispatch()
  const handleChange = React.useCallback(
    (event: SelectChangeEvent<AgentType>,) => {
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
