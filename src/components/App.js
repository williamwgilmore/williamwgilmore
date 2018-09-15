import React, { Component } from 'react';
import Welcome from './Welcome.js';
import About from './About.js';
import Projects from './Projects';
import Technology from './Technology';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Welcome />
        <About />
        <Technology />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
