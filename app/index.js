import React from "react";
import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import routes from "./constants/routes";
import App from "../app/components/app/app";

ReactDOM.render(
    <Provider>
        <Switch>
            <Route path={routes.ENTRY} component={App}></Route>
        </Switch>        
    </Provider>,
    document.getElementById("root")
);