import { expect } from 'chai'

import LinkedList from '.'

describe('Linked List', () => {
  it('head', () => {
    const linkedList = new LinkedList()

    linkedList.append(10)

    expect(linkedList.getHead()?.value).to.equal(10)
  })

  it('tail', () => {
    const linkedList = new LinkedList()

    linkedList.append(10)
    linkedList.append(20)

    expect(linkedList.getTail()?.value).to.equal(20)
  })

  it('preappend', () => {
    const linkedList = new LinkedList()

    linkedList.append(10)
    linkedList.append(20)

    linkedList.preappend(0)

    expect(linkedList.getHead()?.value).to.equal(0)
  })

  it('delete', () => {
    const linkedList = new LinkedList()

    linkedList.append(10)
    linkedList.append(20)

    linkedList.delete(10)

    expect(linkedList.getHead()?.value).to.equal(20)
  })
})
