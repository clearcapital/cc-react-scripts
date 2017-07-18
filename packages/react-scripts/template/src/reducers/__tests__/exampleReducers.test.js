import { EXAMPLE_ACTION } from 'constants/actionTypes'
import exampleReducer from '../exampleReducers'
describe('exampleReducer', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
  describe('exampleReducer test', () => {
    it('should increment by amount', () => {
      const testState = 0
      const addAmount = 1
      const testAction = {
        type: EXAMPLE_ACTION,
        payload: addAmount
      }
      const expectedState = testState + addAmount
      expect(exampleReducer(testState, testAction)).toEqual(expectedState)
    })
  })
})
