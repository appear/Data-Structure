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
    let currentNode = this.head

    while (currentNode) {
      if (currentNode?.next?.value === value) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    return this
  }
  getHead() {
    return this.head
  }
  getTail() {
    return this.tail
  }
}

export default LinkedList
