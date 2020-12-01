import EasyFetch from './lib/index'
import { Instance } from './types'

// react-native: fixed FormData toString return [object Object] error
if (Symbol && Symbol.toStringTag) {
  Object.defineProperty(window.FormData.prototype, Symbol.toStringTag, {
    value: 'FormData',
    writable: false,
    enumerable: false,
    configurable: true
  })
}

export function createInstance(defaultConfig = {}): Instance {
  const context = new EasyFetch(defaultConfig)

  let instance = EasyFetch.prototype.request.bind(context)
  instance = Object.assign(instance, EasyFetch.prototype, context)

  return instance as Instance
}
