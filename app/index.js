import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./constants/routes";
import App from "../app/components/app/app";
import store from "./redux/store/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={routes.ENTRY} component={App}></Route>
            </Switch>
        </BrowserRouter>                
    </Provider>,
    document.getElementById("root")
);