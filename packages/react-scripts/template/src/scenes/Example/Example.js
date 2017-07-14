import React, { Component } from 'react'
import Header from 'components/Header'
import Button from './Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { exampleAction } from './actions'
import './Example.css'

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

  render () {
    return (
      <div className="Example">
        <Header/>
        <h3>You just used React Router v4!</h3>
        <p>Check out this redux example:</p>
        <p className="State">{this.props.state}</p>
        <Button action={this.props.exampleAction.bind(this, addAmount)} text='Change State'/>
        <br/>
        <br/>
        <Link to='/'>Go Back</Link>
      </div>
    )
  }
}

export default Example
