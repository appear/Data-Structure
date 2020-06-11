class Queue<T> {
  private list: T[]

  constructor() {
    this.list = []
  }
  dequeue() {
    return this.list.shift()
  }
  enqueue(value: T) {
    this.list.push(value)

    return this
  }
  size() {
    return this.list.length
  }
}

export default Queue
