import Queue from '../../queue/queue'

class Stack<T> {
  private main: Queue<T>
  private sub: Queue<T>

  constructor() {
    this.main = new Queue<T>()
    this.sub = new Queue<T>()
  }

  push(value: T) {
    if (this.main.isEmpty()) {
      this.main.enqueue(value)
    } else {
      while (!this.main.isEmpty()) {
        this.sub.enqueue(this.main.dequeue() as T)
      }

      this.main.enqueue(value)

      while (!this.sub.isEmpty()) {
        this.main.enqueue(this.sub.dequeue() as T)
      }
    }
  }

  pop() {
    return this.main.dequeue()
  }
}

export default Stack
