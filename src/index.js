import React from "react";
import Reactdom from "react-dom";
import App from "./App";
import { DataLayer } from "./Helpers/DataLayer";
import reducer, { initialState } from "./Helpers/reducer";
import "./index.css";

Reactdom.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
