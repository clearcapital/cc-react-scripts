import React from 'react'
import logo from './assets/logo.svg'
import './Header.css'

const Header = props => {
  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Clear Capital React!</h2>
    </div>
  )
}

export default Header
