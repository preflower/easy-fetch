import { InterceptorManager, Handler } from './InterceptorManager';
import fetchRequest from './request';
import { isHeader, isAbsoluteURL } from './utils';
import { DefaultConfig, Config, Params } from '../types';

const defaultConfig: DefaultConfig = {
  timeout: 3000,
  escape: 'json',
};

function mergeConfig(
  config1: DefaultConfig,
  config2: Config & Partial<DefaultConfig>
): Config & DefaultConfig {
  const config = Object.assign({}, config1, config2);

  // merge headers
  config.headers = {};

  [config1.headers, config2.headers].forEach((conf) => {
    if (isHeader(conf)) {
      conf.forEach((value, key) => {
        Object.assign(config.headers, {
          [key]: value,
        });
      });
    } else {
      config.headers = Object.assign(config.headers, conf);
    }
  });

  config.url = mergeURL(config.baseURL, config.url, config.params);

  return config;
}

function mergeURL(
  baseURL: string = '',
  url: string,
  params: Params = {}
): string {
  let uri = isAbsoluteURL(url) ? url : `${baseURL}${url}`;

  // object -> url params
  let serializedParams = '',
    _temp = [];
  for (let key in params) {
    _temp.push(`${key}=${params[key]}`);
  }
  serializedParams = _temp.join('&');

  if (serializedParams) {
    uri += (uri.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return uri;
}

export default class EasyFetch {
  defaults: DefaultConfig;
  interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };

  constructor(globalConfig: Partial<DefaultConfig> = {}) {
    this.defaults = Object.assign({}, defaultConfig, globalConfig);
  }

  request(config: Config & Partial<DefaultConfig>) {
    if (config.method) {
      config.method = config.method.toUpperCase();
    } else {
      config.method = 'GET';
    }

    config = mergeConfig(this.defaults, config);

    let chain: any[] = [fetchRequest, undefined];
    let promise = Promise.resolve(config);

    this.interceptors.request.forEach(function unshift(
      interceptor: Handler<Config & DefaultConfig>
    ) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    this.interceptors.response.forEach(function push(
      interceptor: Handler<Response>
    ) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });

    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }
}
