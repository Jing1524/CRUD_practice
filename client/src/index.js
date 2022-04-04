import React from "react";
import ReactDOM from "react-dom";

//redux
import { Provider } from "react-redux"; //global state access
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  // passing global state to provider, and the app will have the access to the database
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
