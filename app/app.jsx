var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Greeting = require('Greeting');
import FinishedTasks from 'FinishedTasks';
// var Todo = require('Todo');

import Todo from 'Todo';
console.log(Todo);

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Greeting} />
      <Route path="Todo" components={Todo} />
      <Route path="FinishedTasks" components={FinishedTasks} />
    </Route>
  </Router>,
  document.getElementById("app")
);
