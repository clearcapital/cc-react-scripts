import React from 'react'
import ReactDOM from 'react-dom'
import ApplicationNode from './ApplicationNode'
import {unregister} from './services/registerServiceWorker'
import {whyDidYouUpdate} from 'why-did-you-update'

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(ApplicationNode)
unregister()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./ApplicationNode', () => {
    const NextApp = require('./ApplicationNode').default
    render(NextApp)
  })

  whyDidYouUpdate(React, {
    // include: /^pure/,
    // exclude: /^Connect/,
    groupByComponent: true,
    collapseComponentGroups: true
    // notifier: (groupByComponent, collapseComponentGroups, displayName, diffs) => {
    //   diffs.forEach(({name, prev, next, type}) => {
    //     // Use the diff and notify the user somehow
    //   })
    // }
  })
}
