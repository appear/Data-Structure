import { expect } from 'chai'

import PriorityQueue from '.'

describe('Priority Queue', () => {
  it('return highest priority', () => {
    const priorityQueue = new PriorityQueue<string>()

    priorityQueue.enqueue({
      order: 10,
      data: 'a',
    })

    priorityQueue.enqueue({
      order: 20,
      data: 'b',
    })

    const dequeuedItem = priorityQueue.dequeue()

    expect(dequeuedItem.data).to.equal('b')
  })
})
