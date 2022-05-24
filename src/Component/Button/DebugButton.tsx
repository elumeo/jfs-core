import React from 'react'
import { Box, IconButton, Tooltip } from '@material-ui/core'
import { BugReport } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import * as Action from 'Store/Action'
import definition from 'Component/App/Stateless/Style/Theme/Definition'
type Props = {
    msg: unknown
}
const DebugButton: React.FC<Props> = ({ msg }) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(Action.Debug.post(JSON.stringify({ raw: msg })))
    }
    return <Tooltip title={'Report Senden'}>
        <IconButton
            onClick={onClick}>
            <Box color={definition.palette.common.white}>
                <BugReport color='inherit' />
            </Box>
        </IconButton>
    </Tooltip>
}
export default DebugButton