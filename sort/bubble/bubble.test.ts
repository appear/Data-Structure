import bubbleSort from '.'
import { expect } from 'chai'

describe('bubble Sort', () => {
  it('sort', () => {
    expect(bubbleSort([0, 1, 5, 3, 2, 4])).to.eql([0, 1, 2, 3, 4, 5])
  })
})
