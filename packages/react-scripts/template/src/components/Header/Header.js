import './header.scss'

import React from 'react'
import logo from './assets/logo.png'

const Header = props => {
  return (
    <div styleName='header'>
      <img src={logo} styleName='logo' alt='logo' />
      <h2>Welcome to Clear Capital React!</h2>
    </div>
  )
}

export default Header
