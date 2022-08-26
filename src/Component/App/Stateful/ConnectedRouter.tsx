import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Router, Location, useNavigate } from 'react-router'
import { connect } from 'react-redux'
import { History } from 'history'
import { LocationChangeAction } from 'connected-react-router'
import { Action } from 'history'
type Props = {
    location: Location,
    history: History
    children?: React.ReactNode
}
const ConnectedRouter: React.FC<Props> = ({ location, history, children }) => {
    const skipHistoryChange = React.useRef<boolean>()
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });
    const onLocationChanged = (location: Location, action: Action) => {
        setState({ action, location });
    }
    useEffect(() => {
        const listener = history.listen((nextState) => {
            if (skipHistoryChange.current === true) {
                skipHistoryChange.current = false
                return
            }
            onLocationChanged(nextState.location, nextState.action)
        })
        if (history.location?.pathname !== state.location?.pathname) {
            onLocationChanged(history.location, history.action)
        }
        return listener
    }, [history, state])

    useEffect(() => {
        if (skipHistoryChange.current === undefined) {
            skipHistoryChange.current = false
        } else if (history.location !== state.location) {
            skipHistoryChange.current = true
            history.replace(state.location)
        }
    }, [state])

    return <Router
        location={state.location}
        navigationType={state.action}
        navigator={history} >{children}</Router>
}
export default ConnectedRouter