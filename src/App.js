import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Resume from './components/Resume.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Home from './components/Home.js'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        visible:{
          home: true,
          about: false,
          projects: false,
          contact: false,
          resume: false
        }
      }
  }

changeView = (event) => {
  const clicked = event.target.innerText.toLowerCase()
  console.log(clicked)
  if(clicked === 'home') {
    this.setState({
      visible: { home: true,
                about: false,
                projects: false,
                contact: false,
                resume: false
      }
    })
  }
  else if(clicked === 'about') {
    this.setState({
      visible: { home: false,
                about: true,
                projects: false,
                contact: false,
                resume: false
      }
    })
  }
  else if (clicked === 'projects') {
    this.setState({
      visible: {home: false,
                about: false,
                projects: true,
                contact: false,
                resume: false
      }
    })
  }
  else if(clicked === 'contact') {
    this.setState({
      visible: {home: false,
                about: false,
                projects: false,
                contact: true,
                resume: false
      }
    })
  }
  else if(clicked === 'resume') {
    this.setState({
      visible: {home: false,
                about: false,
                projects: false,
                contact: false,
                resume: true
      }
    })
  }
  else {
    this.setState({
      visible: { home: true,
                about: false,
                projects: false,
                contact: false,
                resume: false
      }
    })
  }
}



  render() {
    return (
      <div className="App">
        <Navbar changeView = {this.changeView} />
        {this.state.visible.home ? <Home /> : null}
        {this.state.visible.about ? <About /> : null}
        {this.state.visible.projects ? <Projects /> : null}
        {this.state.visible.contact ? <Contact /> : null}
        {this.state.visible.resume ? <Resume /> : null}
      </div>
    );
  }
}

export default App;
