import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationNode from './ApplicationNode'
import registerServiceWorker from './services/registerServiceWorker'
import {configureStore} from './store'

// NOTE: React Router v4 uses seperate imports for dom and native now!
// It also utomatically creates a history object for you.

let initialState = {}

if (window.__INITIAL_STATE__) {
  const state = window.__INITIAL_STATE__
  console.log('state', state)
  Object.keys(state).forEach(key => {
    initialState[key] = state[key]
  })
}

const store = configureStore(initialState)

const render = (Component) => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('root')
  )
}

render(ApplicationNode)
registerServiceWorker()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./ApplicationNode', () => {
    const NextApp = require('./ApplicationNode').default
    render(NextApp)
  })
}
