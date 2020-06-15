import { expect } from 'chai'

import Stack from '.'

describe('Stack', () => {
  it('last in first out', () => {
    const stack = new Stack<string>()

    stack.push('a')
    stack.push('b')

    expect(stack.pop()).to.equal('b')
  })
})
