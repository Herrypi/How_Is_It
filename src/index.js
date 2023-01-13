// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { 
//   Routes
// } from 'react-router-dom';
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import GlobalStyles from "./styles/GlobalStyles";
// import theme from "./styles/theme";
// import { ThemeProvider } from "styled-components";

// import 'bootstrap/dist/css/bootstrap.min.css';

// const root = createRoot(document.getElementById("root"));

// root.render(
  
//   <>
//   <App/>
//   <GlobalStyles/>
//   <ThemeProvider theme={theme}>
//     <Routes/>
//   </ThemeProvider>
//   </>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();







import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./redux/reducers";


import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();