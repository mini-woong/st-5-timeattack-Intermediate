import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from './app/store'
import { Provider } from 'react-redux'

// TODO: redux store를 모든 App에 공유할 수 있게 하세요.
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
);
