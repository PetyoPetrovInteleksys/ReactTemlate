import React from 'react';  
import ReactDOM from 'react-dom';
import App from './App';
import Picture from './components/Picture';

import {  BrowserRouter as Router} from 'react-router-dom'
 var Redux = require('redux');
var Provider = require('react-redux').Provider;
var reducer=require('./reducers/RootReducer').default;

var customProps=window.__customProps__;
var store=Redux.createStore(reducer,customProps);
store.subscribe(function () {
    console.log(store.getState())
})


ReactDOM.render(
    <Provider store={store}>
        <Router >
             <App />
        </Router>
    </Provider>
, document.getElementById('app'));  