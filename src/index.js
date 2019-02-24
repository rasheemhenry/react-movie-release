import React from 'react';
import ReactDOM from "react-dom";
import App from './js/components/App';
import store from "./js/store/index";
import { render } from "react-dom";
import { Provider } from "react-redux";
import './css/index.css';

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   // The target element might be either root or app,
//   // depending on your development environment
//   // document.getElementById("app")
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);