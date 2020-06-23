import quickSort from '.'
import { expect } from 'chai'

describe('quickSort Sort', () => {
  it('sort', () => {
    expect(quickSort([0, 1, 5, 3, 2, 4])).to.eql([0, 1, 2, 3, 4, 5])
  })
})
