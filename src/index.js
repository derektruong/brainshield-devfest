import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { DAppProvider } from "@usedapp/core";

ReactDOM.render(
    <DAppProvider config={{}}>
        <App />
    </DAppProvider>,
    document.getElementById("root")
);
