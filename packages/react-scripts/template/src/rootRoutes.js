import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Example from './scenes/Example'
import App from './scenes/App'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/example" component={Example} />
    </Switch>
  )
  // Look Ma, no children! RRv4 treats routes as components now, so call
  // child routes from the parent component!
}

export default Routes
