import React from "react";
import ReactDOM from "react-dom";
import Root from "../app/components/core/root";
import store, { history } from "./redux/store/store";

ReactDOM.render(
    <Root store={store} history={history}></Root>,
    document.getElementById("root")
);