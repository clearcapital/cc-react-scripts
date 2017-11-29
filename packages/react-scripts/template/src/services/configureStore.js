import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistState} from 'redux-devtools'
import DevTools from 'components/DevTools'
import rootReducer from 'reducers'
import {createLogger} from 'redux-logger'

export default function configureStore (initialState = {}) {
  const middleware = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({
      collapsed: true,
      logger: console,
      level: {
        prevState: 'debug',
        action: 'debug',
        nextState: 'debug',
        error: 'error'
      }
    }))
  }

  const enhancers = [
    applyMiddleware(...middleware)
  ]

  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(DevTools.instrument())
    enhancers.push(persistState(getDebugSessionKey()))
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  // For hot reloading of react components
  // Also for debugging
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

function getDebugSessionKey () {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}
