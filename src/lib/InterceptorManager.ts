interface Fulfilled<T> {
  (value: T): T | Promise<T>;
}

interface Rejected {
  (error: any): any;
}

export interface Handler<T> {
  fulfilled?: Fulfilled<T>;
  rejected?: Rejected;
}

export class InterceptorManager<T> {
  handlers: Array<Handler<T> | null> = [];

  use(fulfilled: Fulfilled<T>, rejected?: Rejected): number {
    this.handlers.push({ fulfilled, rejected });

    return this.handlers.length - 1;
  }

  eject(id: number) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  forEach(fn: Function) {
    this.handlers.forEach((value: Handler<T> | null) => {
      if (value !== null) {
        fn(value);
      }
    });
  }
}
