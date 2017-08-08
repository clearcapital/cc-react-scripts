import React, { Component } from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { exampleAction } from 'actions/exampleActions'
import './example.scss'

const addAmount = 1

const mapStateToProps = state => ({
  state: state.exampleReducer
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  exampleAction
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
class Example extends Component {
  static propTypes = {
    state: PropTypes.number,
    exampleAction: PropTypes.func
  }

  action = () => {
    this.props.exampleAction(addAmount)
  }

  render () {
    return (
      <div styleName='Example'>
        <Header />
        <h3>You just used React Router v4!</h3>
        <p>Check out this sweet redux example:</p>
        <p styleName='State'>{this.props.state}</p>
        <Button action={this.action} text='Change State' />
        <br />
        <br />
        <Link to='/'>Go Back</Link>
        <Footer />
      </div>
    )
  }
}

export default Example
