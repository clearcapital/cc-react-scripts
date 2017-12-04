import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationNode from './ApplicationNode'
import {unregister} from './services/registerServiceWorker'
import store from './services/store'

let initialState = {}

if (window.__INITIAL_STATE__) {
  const state = window.__INITIAL_STATE__
  console.log('state', state)
  Object.keys(state).forEach(key => {
    initialState[key] = state[key]
  })
}

const render = (Component) => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('root')
  )
}

render(ApplicationNode)
unregister()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./ApplicationNode', () => {
    const NextApp = require('./ApplicationNode').default
    render(NextApp)
  })
}
