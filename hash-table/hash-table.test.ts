import { expect } from 'chai'

import HashTable from '.'
import { DEFAULT_TABLE_SIZE } from './constants'

describe('Hash Table', () => {
  it('default bucket size is 32', () => {
    const hashTable = new HashTable()

    expect(hashTable.size()).to.equal(DEFAULT_TABLE_SIZE)
  })

  it('generate hash key', () => {
    const hashTable = new HashTable()

    expect(hashTable.hash('a')).to.equal(1)
    expect(hashTable.hash('b')).to.equal(2)
  })

  it('set', () => {
    const hashTable = new HashTable<number>()

    hashTable.set('a', 10)

    expect(hashTable.get('a')).to.equal(10)
  })

  it('delete', () => {
    const hashTable = new HashTable<number>()

    hashTable.set('a', 10)

    hashTable.delete('a')

    expect(hashTable.get('a')).to.equal(null)
  })
})
