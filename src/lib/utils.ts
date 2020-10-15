const toString = Object.prototype.toString;

export function isHeader(val: unknown): val is Headers {
  return toString.call(val) === '[object Headers]';
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return toString.call(val) === '[object Object]';
}

export function isAbsoluteURL(url: string): boolean {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}
