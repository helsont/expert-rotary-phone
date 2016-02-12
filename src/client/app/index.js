import React from 'react';
import {render} from 'react-dom';
import LeadInfoContainer from './LeadInfoContainer.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <LeadInfoContainer />
      </div>
    );
  }
}

module.exports.ReactApp = App;
