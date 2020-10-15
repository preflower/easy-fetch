import EasyFetch from './lib/index'
import { Instance } from './types'

export function createInstance (defaultConfig = {}): Instance {
  const context = new EasyFetch(defaultConfig)

  let instance = EasyFetch.prototype.request.bind(context)
  instance = Object.assign(instance, EasyFetch.prototype, context)

  return instance as Instance
}
