import { expect } from 'chai'

import Node from '.'

describe('Node', () => {
  it('node value is 10', () => {
    const node = new Node(10)

    expect(node.value).to.equal(10)
  })

  it('initial node not have next node', () => {
    const node = new Node(10)

    expect(node.next).to.equal(null)
  })

  it('next node value is 20', () => {
    const node = new Node(10)
    const nextNode = new Node(20)

    node.next = nextNode

    expect(node.next.value).to.equal(20)
  })
})
