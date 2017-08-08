import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = (props) => {
  return (
    <button styleName='myButton' onClick={props.action}>{props.text}</button>
  )
}

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string
}

export default Button
