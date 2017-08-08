import React from 'react'
import logo from './assets/logo.png'
import './header.scss'

const Header = props => {
  return (
    <div styleName='App-header'>
      <img src={logo} styleName='App-logo' alt='logo' />
      <h2>Welcome to Clear Capital React!</h2>
    </div>
  )
}

export default Header
