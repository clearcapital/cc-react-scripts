import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
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
          <li>Absolute path for imports</li>
          <li>Less and Sass webpack support</li>
          <li>StandardJS Linting</li>
          <li>Lodash, moment, classnames</li>
          <li>And much more!</li>
        </ul>
        <Link className="linkText" to='/Example'>Redux Example</Link>
        <Footer/>
      </div>
    )
  }
}

export default App
