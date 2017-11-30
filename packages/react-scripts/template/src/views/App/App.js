import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='App'>
        <Header />
        <h3>Some cool things we included:</h3>
        <ul styleName='centered-list'>
          <li><a href='http://redux.js.org/'>Redux dev and prod suite</a></li>
          <li><a href='https://reacttraining.com/react-router/web/guides/philosophy'>React Router v4</a></li>
          <li><a href='https://github.com/gajus/babel-plugin-react-css-modules#hot-to-live-reload-the-css'>
              Babel Sass Modular styling</a>
          </li>
          <li>True JS Hot Module Replacement</li>
          <li>Absolute path for imports (<code>/src/*</code>)</li>
          <li>Less and Sass support</li>
          <li>StandardJS Linting</li>
          <li>Lodash, moment, classnames</li>
          <li>And much more!</li>
        </ul>
        <Footer />
      </div>
    )
  }
}

export default App
