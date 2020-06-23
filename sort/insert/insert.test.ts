import insertSort from '.'
import { expect } from 'chai'

describe('insert Sort', () => {
  it('sort', () => {
    expect(insertSort([0, 1, 5, 3, 2, 4])).to.eql([0, 1, 2, 3, 4, 5])
  })
})
