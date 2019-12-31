import React from "react";
import ReactDOM from "react-dom";
import Root from "../app/components/core/root";
import { AppContainer } from "react-hot-loader";
import store, { history } from "./redux/store/store";

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Root store={store} history={history}></Root>
        </AppContainer>,
        document.getElementById("root")
    );
};

render();

if (module.hot){
    module.hot.accept("../app/components/core/root", () => render());
}