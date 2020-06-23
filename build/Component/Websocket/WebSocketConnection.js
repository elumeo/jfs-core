import React from 'react';
import { connect } from 'react-redux';
import { webSocketUpdateRoomAction } from '../../Store/Action/WebSocketAction';
import { WSClient } from '../../Base/WSClient';
class WebSocketConnection extends React.Component {
    componentDidMount() {
        WSClient.listenRoomsObservable$.subscribe((roomData) => this.props.webSocketUpdateRoomAction(roomData));
    }
    render() {
        const { props: { children } } = this;
        return (React.createElement("div", null, children));
    }
}
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { config: state.Core.Configuration.config, webSocketConnectionReducer: state.Core.WebSocketConnection }));
export default connect(mapStateToProps, {
    webSocketUpdateRoomAction
})(WebSocketConnection);
//# sourceMappingURL=WebSocketConnection.js.map