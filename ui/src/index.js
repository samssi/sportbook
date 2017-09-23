import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Application from "./components/Application/Application";
import { createStore } from "redux";
import store from "./reducers/store";
import "./css/reset.css";

render(
    <Provider store={store}>
        <Application />
    </Provider>
    ,
    document.getElementById("root")
);