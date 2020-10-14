const toString = Object.prototype.toString;

export function isHeader(val: any): val is Headers {
  return toString.call(val) === '[object Headers]';
}

export function isObject(val: any): val is Object {
  return toString.call(val) === '[object Object]';
}

export function isAbsoluteURL(url: string): Boolean {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
