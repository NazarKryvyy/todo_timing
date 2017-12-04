var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import Greeting from 'Greeting';
import Todo from 'Todo';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>      
      <Route path="Todo" component={Todo}/>   
      <IndexRoute component={Greeting}/>   
    </Route>
  </Router>,
  document.getElementById('app')
);
