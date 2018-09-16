import React, { Component } from 'react';
import Welcome from './Welcome.js';
import About from './About.js';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Welcome />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
