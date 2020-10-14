import { InterceptorManager } from './lib/InterceptorManager';

type Escape = 'json' | 'text' | 'formData' | 'blob' | 'arrayBuffer';

export interface Params {
  [propsName: string]: string;
}

export interface DefaultConfig {
  baseURL?: string;
  timeout?: number;
  escape: Escape;
  headers?: HeadersInit;
}

export interface Config extends RequestInit {
  url: string;
  data?: BodyInit | Object;
  params?: Params;
}

export interface Response<T = any> {
  data: T;
  status: number;
  statusText: string;
}

export interface Instance {
  (config: Config & Partial<DefaultConfig>): Promise<Config & DefaultConfig>;
  interceptors: {
    request: InterceptorManager<Config & DefaultConfig>;
    response: InterceptorManager<Response>;
  };
}
