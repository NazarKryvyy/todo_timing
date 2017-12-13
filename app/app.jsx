import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Greeting from "Greeting";
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
