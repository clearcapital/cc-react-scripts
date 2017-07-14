import React, { Component } from 'react'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/>
        <h3>Some cool things we included:</h3>
        <ul className="centered-list">
          <li>Redux dev and prod suite</li>
          <li>React Router v4</li>
          <li>True JS Hot Module Replacement</li>
          <li>Absolute Path for imports</li>
          <li>Less and Sass for webpack</li>
          <li>StandardJS Linting</li>
          <li>Lodash, moment, classnames</li>
          <li>And much more!</li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro"></p>
        <Link className="linkText" to='/Example'>Redux Example</Link>

      </div>
    )
  }
}

export default App
