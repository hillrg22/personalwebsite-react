import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import AboutMe from './components/AboutMe.js'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        aboutMe: false,
        projects: false,
        contact: false,
      }
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutMe />
      </div>
    );
  }
}

export default App;
