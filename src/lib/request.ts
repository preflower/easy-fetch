import { isObject } from './utils'
import { Config, DefaultConfig } from '../types'

/**
 * send request via fetch
 * @param {*} config
 */
export default async function request(
  config: Config & DefaultConfig
): Promise<unknown> {
  const { url, data, timeout, escape, ...options } = config

  async function timeoutPromise(): Promise<Response> {
    // although promise never react Response, but need for ts check
    return await new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        return reject(new Error('TIMEOUT'))
      }, timeout)
    })
  }
  // TODO: glue code; method is initial in index.ts[74]
  if (!/^(GET|HEAD)$/i.test(options.method ?? 'GET')) {
    // react-native: fixed FormData toString return [object Object] error
    if (data instanceof window.FormData) options.body = data
    else if (isObject(data)) options.body = JSON.stringify(data)
    else options.body = data
  }

  return Promise.race([timeoutPromise(), window.fetch(url, options)])
    .then(async (response: Response) => {
      // check response status, if status in 200~299, ok -> true
      if (response.ok || response.status === 304) {
        return await response[escape]()
      } else {
        return await Promise.reject(response.status)
      }
    })
    .catch(async (error) => {
      return await Promise.reject(error)
    })
}
