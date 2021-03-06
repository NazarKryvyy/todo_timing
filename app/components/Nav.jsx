import React from'react';
import {Link, IndexLink} from 'react-router';


export default class Nav extends React.Component{
    render(){
        return <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">Todo list</li>
                <li>
                  <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                    Greeting
                  </IndexLink>
                </li>
                <li>
                  <Link to="/Todo" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                    Todo
                  </Link>
                </li>
                <li>
                  <Link to="/FinishedTasks" activeClassName="active" activeStyle={{ fontWeight: "bold" }}>
                    FinishedTasks
                  </Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Created by <a href="https://github.com/NazarKryvyy" target="_blank">
                    {" "}
                    Nazar Kryvyy
                  </a>
                </li>
              </ul>
            </div>
          </div>;
    }
}


module.exports = Nav;

