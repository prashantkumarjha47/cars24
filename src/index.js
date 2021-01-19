import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./store/Context";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={<div>...Loading</div>}>
    <ContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextProvider>
  </Suspense>,
  rootElement
);
