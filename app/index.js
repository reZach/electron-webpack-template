import React from "react";
import ReactDOM from 'react-dom';
import App from "../app/components/app/app";
import nonce from "../app/utils/nonce";

__webpack_nonce__ = nonce;

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
);