class Stack<T> {
  private list: T[]

  constructor() {
    this.list = []
  }

  push(value: T) {
    this.list.push(value)

    return this
  }
  pop() {
    return this.list.pop()
  }
}

export default Stack
