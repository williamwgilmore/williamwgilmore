import React, { Component } from 'react';
import Home from './Home.js';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Home />
        <Home />
      </div>
    );
  }
}

export default App;
