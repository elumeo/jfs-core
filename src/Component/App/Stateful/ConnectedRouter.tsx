import React from 'react'
import { History } from 'history'
import { ReduxRouter } from '@lagunovsky/redux-react-router'
type Props = {
    history: History
    children?: React.ReactNode
}
const ConnectedRouter: React.FC<Props> = ({ history, children, ...rest }) => {

    return <ReduxRouter
        history={history}
        {...rest}
    >{children}</ReduxRouter>
}
export default ConnectedRouter