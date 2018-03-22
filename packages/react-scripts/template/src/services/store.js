import configureStore from 'services/configureStore'
import rootReducer from 'reducers'

const initialState = {}

if (window.__INITIAL_STATE__) {
  const state = window.__INITIAL_STATE__
  Object.keys(state).forEach(key => {
    initialState[key] = state[key]
  })
}

const store = configureStore(initialState, rootReducer)
export default store
