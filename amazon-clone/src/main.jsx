import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { initialState, reducer } from "./Utility/reducer";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <DataProvider reducer={reducer} initialState={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
