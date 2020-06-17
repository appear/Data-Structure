import { expect } from 'chai'

import BinarySearchTree from '.'

describe('binary search tree', () => {
  it('head', () => {
    const bst = new BinarySearchTree<number>()

    bst.insert(10)
    bst.insert(20)

    expect(bst.getHeadValue()).to.equal(10)
  })

  it('search', () => {
    const bst = new BinarySearchTree<number>()

    bst.insert(10)
    bst.insert(5)

    expect(bst.search(5)).to.equal(true)
  })

  it('delete Leaf Node', () => {
    const bst = new BinarySearchTree<number>()

    bst.insert(10)
    bst.insert(5)

    bst.delete(5)

    expect(bst.search(5)).to.equal(false)
  })
})
