import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Clear Capital React!</h2>
        </div>
        <h3>Some cool things we included:</h3>
        <ul className="centered-list">
          <li>Less and Sass for webpack</li>
          <li>StandardJS Linting</li>
          <li>Redux dev and prod suite</li>
          <li>Lodash, moment, classnames</li>
          <li>And much more!</li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
