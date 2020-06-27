import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer }  from './reducer/';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>, 
document.getElementById("root"));
