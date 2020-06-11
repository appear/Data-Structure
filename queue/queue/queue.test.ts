import { expect } from 'chai'

import Queue from '.'

describe('Queue', () => {
  it('first in first out', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.enqueue(20)

    expect(queue.dequeue()).to.equal(10)
  })

  it('size', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.enqueue(20)

    expect(queue.size()).to.equal(2)
  })

  it('empty size is 0', () => {
    const queue = new Queue()

    queue.enqueue(10)
    queue.dequeue()

    expect(queue.size()).to.equal(0)
  })
})
