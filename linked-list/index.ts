import Node from '../node'

class LinkedList<T> {
  private head: Node<T> | null
  private tail: Node<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  append(value: T) {
    const node = new Node(value)

    if (this.head === null || this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    return this
  }
  isEmpty() {
    return this.head === null || this.tail === null
  }
  preappend(value: T) {
    const node = new Node(value)
    node.next = this.head
    this.head = node

    return this
  }
  toArray() {
    const list = []
    let node = this.head

    while (node) {
      list.push(node.value)
      node = node.next
    }

    return list
  }
  delete(value: T) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head?.value === value) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode: Node<T> | null = this.head

    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail?.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  find({
    value,
    callback,
  }: {
    value?: T
    callback?: (value: T) => boolean
  }): null | Node<T> {
    if (!this.head) {
      return null
    }
    let currentNode: Node<T> | null = this.head

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }

      /**
       * TODO: deep equal
       */
      if (value !== undefined && currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  getHead() {
    return this.head
  }
  getTail() {
    return this.tail
  }
}

export default LinkedList
