import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers/rootReducer";

export const history = createBrowserHistory();

const store = configureStore({
    reducer: rootReducer(history),
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
});

export default store;