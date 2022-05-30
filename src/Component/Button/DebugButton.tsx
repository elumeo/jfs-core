import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, TextFieldProps, Tooltip } from '@material-ui/core'
import { BugReport } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import * as Action from 'Store/Action'
import definition from 'Component/App/Stateless/Style/Theme/Definition'
import { useIntl } from 'react-intl'
type Props = {
    msg: unknown
}
const DebugButton: React.FC<Props> = ({ msg }) => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState('')
    const openDialog = () => {
        setOpen(true)
    }
    const closeDialog = () => {
        setOpen(false)
    }
    const submit = () => {
        dispatch(Action.Debug.post(JSON.stringify({ description, raw: msg })))

    }
    const onChange: TextFieldProps['onChange'] = e => {
        setDescription(e.target.value)
    }
    return (
        <>
            <Dialog open={open} maxWidth='sm' fullWidth onClose={closeDialog}>

                <DialogTitle>{formatMessage({ id: 'debug.title' })}</DialogTitle>
                <DialogContent>
                    <TextField id='debug-input' label={formatMessage({ id: 'debug.label' })} value={description} onChange={onChange} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={submit} variant='outlined' color='secondary'>{formatMessage({ id: 'debug.submit' })}</Button>
                </DialogActions>
            </Dialog>
            <Tooltip title={formatMessage({ id: 'debug.title' })}>
                <IconButton
                    onClick={openDialog}>
                    <Box color={definition.palette.common.white}>
                        <BugReport color='inherit' />
                    </Box>
                </IconButton>
            </Tooltip>
        </>
    )
}
export default DebugButton