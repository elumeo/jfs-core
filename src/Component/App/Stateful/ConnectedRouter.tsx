import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Router, Location } from 'react-router'
import { connect } from 'react-redux'
import { History } from 'history'
type Props = {
    location: Location,
    history: History
    children?: React.ReactNode
}
const ConnectedRouter: React.FC<Props> = ({ location, history, children }) => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    // const ConnectedReactRouter = connect(({router: {location, action}}) => ({location, action}))(Router)
    useEffect(() => {
        // dispatch(push())
        console.log({ location })
    }, [dispatch, location])
    return <Router
        location={state.location}
        navigationType={state.action}
        navigator={history} >{children}</Router>
}
export default ConnectedRouter