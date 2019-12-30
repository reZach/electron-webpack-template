import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider, connect } from "react-redux";
import Routes from "../core/routes";

class Root extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <Routes></Routes>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Root;