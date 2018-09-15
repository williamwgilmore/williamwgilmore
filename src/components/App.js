import React, { Component } from 'react';
import Welcome from './Welcome.js';
import About from './About.js';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Welcome />
        <About />
      </div>
    );
  }
}

export default App;
