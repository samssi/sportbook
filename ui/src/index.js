import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Application from "./components/Application/Application";
import { createStore } from "redux";
import reducer from "./reducers";
import "./css/reset.css";

let store = createStore(reducer);

render(
    <Provider store={store}>
        <Application />
    </Provider>
    ,
    document.getElementById("root")
);