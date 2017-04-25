

var express = require('express')
var app = express();
var expressRoutter=express.Router()

//  var StaticRouter= require('react-router-dom/StaticRouter');
import { StaticRouter , matchPath } from 'react-router';
 var ReactDOMServer = require('react-dom/server');
 var React=require('react');
var App=require('./src/App').default;
import render from './render';
var router = require('express').Router();
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) {

    return state;
}

app.use(express.static('public'));



app.get('*', function (req, res) {
        var customProps={logged:false};
          var store = Redux.createStore(reducer, customProps);
          console.log('URL is:  '+req.url)
          const context = {}

              const markup =(
                  <Provider store={store}>
                      <StaticRouter context={context} location={req.url}>
                              <App/>
                  </StaticRouter>
                </Provider>
              );
                          
                          
                res.status(200).send(render(markup,customProps))
    

});



app.listen(3000, function () {
  console.log('My app is listening on port 3000!')
})