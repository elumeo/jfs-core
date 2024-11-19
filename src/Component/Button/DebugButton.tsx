import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, TextFieldProps, Tooltip } from '@mui/material'
import { BugReport } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import * as Action from 'Store/Action'
import { useIntl } from 'react-intl'
import { useSelector } from 'Types/Redux'
import { Logger } from 'Types/Debug'
import { common } from '@mui/material/colors'
type Props = Logger
const DebugButton: React.FC<Props> = ({
  selector = state => ({...state}),
  actions = [Action.addErrorNotification],
  mapper = (action) => (action)?.payload ?? action.type,
  filter = () => true
}) => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl()
  const state = useSelector(selector)
  const [open, setOpen] = useState(false)
  const [description, setDescription] = useState('')
  const openDialog = React.useCallback(
    () => {
      setOpen(true)
    },
    [setOpen]
  )
  const closeDialog = React.useCallback(
    () => {
      setOpen(false)
      setDescription('')
    },
    [setOpen, setDescription]
  )

  const submit = React.useCallback(
    () => {
      dispatch(Action.Debug.post({ description, state }))
      closeDialog()

    },
    [dispatch, state, description, closeDialog])
  const onChange: TextFieldProps['onChange'] = React.useCallback(
    e => {
      setDescription(e.target.value?.slice(0, Math.min(e.target.value.length, 255)))
    },
    [setDescription]

  )
  useEffect(
    () => {
      dispatch(Action.Debug.register({ actions, mapper, filter }))
    },
    []
  )
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
          onClick={openDialog} >
          <BugReport sx={{ color: common.white }} />
        </IconButton>
      </Tooltip>
    </>
  )
}
export default DebugButton
