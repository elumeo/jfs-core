import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigator, Router, Location } from 'react-router'
import { connect } from 'react-redux'
type Props = {
    location: Location,
    history: Navigator
    children?: React.ReactNode
}
const ConnectedRouter: React.FC<Props> = ({ location, history, children }) => {
    const dispatch = useDispatch();
    // const ConnectedReactRouter = connect(({router: {location, action}}) => ({location, action}))(Router)
    useEffect(() => {
        // dispatch(push())
        console.log({location})
    },[dispatch,location])
    return <Router location={location} navigator={history}>{children}</Router>
}
export default ConnectedRouter