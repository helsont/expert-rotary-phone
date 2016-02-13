import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="../" className="navbar-brand">Riley</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li><a href="#" target="_blank">Dashboard</a></li>
              <li><a href="#" target="_blank">Demo Users</a></li>
              <li><a href="#" target="_blank">Waiting List</a></li>
              <li><a href="#" target="_blank">Message Center</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="download">Archives <span className="caret"></span></a>
                <ul className="dropdown-menu" aria-labelledby="download">
                  <li><a href="http://jsfiddle.net/bootswatch/gqhenoox/">Open Sandbox</a></li>
                  <li className="divider"></li>
                  <li><a href="./bootstrap.min.css">bootstrap.min.css</a></li>
                  <li><a href="./bootstrap.css">bootstrap.css</a></li>
                </ul>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="http://builtwithbootstrap.com/" target="_blank">Settings</a></li>
              <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">Daniel</a></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
