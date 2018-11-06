import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Resume from './components/Resume.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        visible:{
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
  if(clicked === 'about') {
    this.setState({
      visible: { about: true}
    })
  }
  // else {
  //   this.setState.visible = false
  // }
}



  render() {
    return (
      <div className="App">
        <Navbar changeView = {this.changeView} />
        {this.state.visible.about ? <About /> : null}
        {this.state.visible.projects ? <Projects /> : null}
        {this.state.visible.contact ? <Contact /> : null}
        {this.state.visible.resume ? <Resume /> : null}
      </div>
    );
  }
}

export default App;
