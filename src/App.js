import React, { Component } from 'react';
import AppBar from './AppBar.js';
import Controls from './Controls.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <div>
          <Controls></Controls>
        </div>
      </div>
    );
  }
}

export default App;
