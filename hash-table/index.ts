import { DEFAULT_TABLE_SIZE } from './constants'
import LinkedList from '../linked-list'

type HashNode<T> = {
  key: string
  value: T
}

class HashTable<T> {
  private buckets: LinkedList<HashNode<T>>[]

  constructor(size?: number) {
    /* hash key collision solution */
    this.buckets = [...new Array(size || DEFAULT_TABLE_SIZE)].map(
      () => new LinkedList<HashNode<T>>(),
    )
  }

  size() {
    return this.buckets.length
  }

  hash(key: string) {
    const hash = [...key].reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0,
    )

    return hash % this.buckets.length
  }

  set(key: string, value: T) {
    const keyHash = this.hash(key)
    const bucketLinkedList = this.buckets[keyHash]

    const node = bucketLinkedList.find({
      callback: (value) => value.key === keyHash.toString(),
    })

    if (!node) {
      bucketLinkedList.append({ key: keyHash.toString(), value: value })
    } else {
      node.value.value = value
    }
  }

  get(key: string) {
    const keyHash = this.hash(key)
    const bucketLinkedList = this.buckets[keyHash]

    const node = bucketLinkedList.find({
      callback: (value) => value.key === keyHash.toString(),
    })

    return node ? node.value.value : null
  }

  delete(key: string) {
    const keyHash = this.hash(key)
    const bucketLinkedList = this.buckets[keyHash]

    const node = bucketLinkedList.find({
      callback: (value) => value.key === keyHash.toString(),
    })

    if (node) {
      bucketLinkedList.delete(node.value)

      return true
    }

    return false
  }
}

export default HashTable
