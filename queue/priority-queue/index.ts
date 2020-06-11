type Item<T> = { order: number; data: T }

class PriorityQueue<T> {
  private list: Item<T>[]

  constructor() {
    this.list = []
  }

  enqueue(item: Item<T>) {
    this.list.push(item)

    return this
  }

  dequeue() {
    let entry = 0

    this.list.forEach((_, idx) => {
      const nextIndex = idx + 1

      if (!this.list[nextIndex]) {
        return
      }

      if (this.list[entry].order < this.list[nextIndex].order) {
        entry = nextIndex
      }
    })

    const [dequeuedItem] = this.list.splice(entry, 1)

    return dequeuedItem
  }

  size() {
    return this.list.length
  }
}

export default PriorityQueue
