import { EXAMPLE_ACTION } from 'constants/actionTypes'
import { exampleAction } from '../exampleActions'

describe('exampleAction', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
  describe('exampleAction test', () => {
    it('should increment by amount', () => {
      const testAmount = 1
      const expectedAction = {
        type: EXAMPLE_ACTION,
        payload: testAmount
      }
      expect(exampleAction(testAmount)).toEqual(expectedAction)
    })
  })
})
