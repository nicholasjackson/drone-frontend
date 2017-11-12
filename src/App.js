import React, { Component } from 'react';
import AppBar from './AppBar.js';
import Grid from './Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <div>
          <Grid></Grid>
        </div>
      </div>
    );
  }
}

export default App;
