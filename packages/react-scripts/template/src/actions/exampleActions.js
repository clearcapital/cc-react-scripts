import {
  EXAMPLE_ACTION
} from 'constants/actionTypes'

export function exampleAction (amount) {
  return {
    type: EXAMPLE_ACTION,
    payload: amount
  }
}
