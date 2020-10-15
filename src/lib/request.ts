import { isObject } from './utils'
import { Config, DefaultConfig } from '../types'

/**
 * send request via fetch
 * @param {*} config
 */
export default async function request (config: Config & DefaultConfig): Promise<unknown> {
  const { url, data, timeout, escape, ...options } = config

  async function timeoutPromise (): Promise<Response> {
    // although promise never react Response, but need for ts check
    return new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        return reject(new Error('TIMEOUT'))
      }, timeout)
    })
  }
  // TODO: glue code; method is initial in index.ts[74]
  if (!/^(GET|HEAD)$/i.test(options.method || 'GET')) {
    options.body = isObject(data) ? JSON.stringify(data) : data
  }

  return Promise.race([timeoutPromise(), fetch(url, options)])
    .then((response: Response) => {
      // check response status, if status in 200~299, ok -> true
      if (response.ok || response.status === 304) {
        return response[escape]()
      } else {
        return Promise.reject(response.status)
      }
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}
