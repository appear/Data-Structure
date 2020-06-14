import Node from '../node'

class Tree<T> {
  private head: Node<T> | null

  constructor() {
    this.head = null
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
      } else if (currentNode.value > value) {
        /* left */
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }
}

export default Tree
