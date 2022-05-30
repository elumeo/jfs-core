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
    const openDialog = React.useCallback(() => {
        setOpen(true)
    }, [setOpen])
    const closeDialog = React.useCallback(() => {
        setOpen(false)
        setDescription('')
    }, [setOpen, setDescription])
    const submit = React.useCallback(() => {
        dispatch(Action.Debug.post(JSON.stringify({ description, raw: msg })))
        closeDialog()

    }, [dispatch, msg, description, closeDialog])
    const onChange: TextFieldProps['onChange'] = React.useCallback(e => {
        setDescription(e.target.value)
    }, [setDescription])
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
export default React.memo(DebugButton)