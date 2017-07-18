import {
  EXAMPLE_ACTION
} from 'constants/actionTypes'

export default function exampleReducer (state = 0, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return state + action.payload
    default:
      return state
  }
}
