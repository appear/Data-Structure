import Node from '../node'

class Tree<T> {
  private head: Node<T> | null

  constructor() {
    this.head = null
  }

  getHeadValue() {
    return this.head?.value
  }

  insert(value: T) {
    if (!this.head) {
      this.head = new Node(value)
    }

    let currentNode = this.head

    while (true) {
      /* left */
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value)
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        /* right */
        if (!currentNode.right) {
          currentNode.right = new Node(value)
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }

  search(value: T) {
    if (!this.head) {
      return false
    }

    let currentNode: Node<T> | null = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode =
        currentNode.value > value ? currentNode.left : currentNode.right
    }

    return false
  }

  delete(value: T) {
    if (this.head === null || !this.search(value)) {
      return false
    }

    let currentNode = this.head
    let parentNode = this.head

    while (currentNode as Node<T>) {
      if (currentNode.value === value) {
        break
      }

      parentNode = currentNode
      currentNode =
        value < currentNode.value
          ? (currentNode.left as Node<T>)
          : (currentNode.right as Node<T>)
    }

    /* case1: Leaf Node */
    if (currentNode.left === null && currentNode.right === null) {
      if (value < parentNode.value) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
      return true
    }

    /* case2: has One Left Node */
    if (currentNode.left !== null && currentNode.right === null) {
      if (value < parentNode.value) {
        parentNode.left = currentNode.left
      } else {
        parentNode.right = currentNode.left
      }
      return true
    }

    /* case3: has One Right Node */
    if (currentNode.right !== null && currentNode.left === null) {
      if (value < parentNode.value) {
        parentNode.left = currentNode.right
      } else {
        parentNode.right = currentNode.right
      }

      return true
    }

    let changeNode = null
    let changeParentNode = null

    /* case4: has two Node */
    if (currentNode.left !== null && currentNode.right !== null) {
      if (value < parentNode.value) {
      }
    }

    return false
  }
}

export default Tree
