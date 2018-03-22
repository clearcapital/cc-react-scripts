import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import history from 'services/history'
import App from './views/App'
import store from 'services/store'

export default class ApplicationNode extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className='application-node'>
            <App />
          </div>
        </Router>
      </Provider>
    )
  }
}
