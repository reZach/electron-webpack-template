import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider, connect } from "react-redux";
import routes from "../../constants/routes";
import App from "../app/app";
import Page2 from "../page2/page2";

class Root extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {}
    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={this.props.history}>
                    <Switch>
                        <Route path={routes.ENTRY} component={App}></Route>
                        <Route path={routes.MAIN} component={Page2}></Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

const mapStateToProps = (state, props) => ({});

export default connect(mapStateToProps, {})(Root);
