type Fulfilled<T> = (value: T) => T | Promise<T>

type Rejected = (error: unknown) => unknown

export interface Handler<T> {
  fulfilled?: Fulfilled<T>
  rejected?: Rejected
}

export class InterceptorManager<T> {
  handlers: Array<Handler<T> | null> = []

  use (fulfilled: Fulfilled<T>, rejected?: Rejected): number {
    this.handlers.push({ fulfilled, rejected })

    return this.handlers.length - 1
  }

  eject (id: number): void {
    if (this.handlers[id]) {
      this.handlers[id] = null
    }
  }

  forEach (fn: (interceptor: Handler<T>) => void): void {
    this.handlers.forEach((value: Handler<T> | null) => {
      if (value !== null) {
        fn(value)
      }
    })
  }
}
