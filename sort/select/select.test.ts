import selectSort from '.'
import { expect } from 'chai'

describe('select Sort', () => {
  it('sort', () => {
    expect(selectSort([0, 1, 5, 3, 2, 4])).to.eql([0, 1, 2, 3, 4, 5])
  })
})
