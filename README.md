# Easy Fetch

A fetch-based request library, similar to axios

## Installing
```
$ npm i @preflower/lin
```

## Example
```
/* UMD Usage */
const instance = easyFetch.createInstance({
  baseURL: 'https://xiatiande.com',
});

/* ES Usage */
import { createInstance } from 'easy-fetch';

const instance = createInstance({
  baseURL: 'https://xiatiande.com',
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response;
});
```

## API (\*：default value)

### [Fetch Config Params](https://zh.javascript.info/fetch-api)

- method: \*GET, POST, HEAD, PUT, DELETE, etc
- headers: Object / Headers Type
- body: Blob, BufferSource, FormData, URLSearchParams, USVString; tips: GET, HEAD unsupported
- mode: \*cors, no-cors, same-origin, navigate
- credentials: omit, \*same-origin, include
- cache: \*default, no-store, reload, no-cache, force-cache,only-if-cached
- redirect: \*follow, error, manual
- integrity: hash 通过传递 hash，验证请求资源完整性
- keepalive: \*false, true 确保请求持续直到结束
- signal: use for stop request TODO：考虑怎么实现中止请求

### Custom API

- baseURL: ''
- timeout: 3000
- escape: text, \*json, formData, blob, arrayBuffer

## Weakness

- don't support upload progress
- can't be aborted directly, need to use AbortController
