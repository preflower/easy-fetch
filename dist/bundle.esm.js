var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
        this.handlers.push({ fulfilled: fulfilled, rejected: rejected });
        return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function (id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    };
    InterceptorManager.prototype.forEach = function (fn) {
        this.handlers.forEach(function (value) {
            if (value !== null) {
                fn(value);
            }
        });
    };
    return InterceptorManager;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var toString = Object.prototype.toString;
function isHeader(val) {
    return toString.call(val) === '[object Headers]';
}
function isObject(val) {
    return toString.call(val) === '[object Object]';
}
function isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

/**
 * send request via fetch
 * @param {*} config
 */
function request(config) {
    var url = config.url, data = config.data, timeout = config.timeout, escape = config.escape, options = __rest(config, ["url", "data", "timeout", "escape"]);
    function timeoutPromise() {
        // although promise never react Response, but need for ts check
        return new Promise(function (_, reject) {
            setTimeout(function () {
                return reject('TIMEOUT');
            }, timeout);
        });
    }
    // TODO: glue code; method is initial in index.ts[74]
    if (!/^(GET|HEAD)$/i.test(options.method || 'GET')) {
        options.body = isObject(data) ? JSON.stringify(data) : data;
    }
    return Promise.race([timeoutPromise(), fetch(url, options)])
        .then(function (response) {
        // check response status, if status in 200~299, ok -> true
        if (response.ok || response.status === 304) {
            return response[escape]();
        }
        else {
            return Promise.reject(response.status);
        }
    })
        .catch(function (error) {
        return Promise.reject(error);
    });
}

var defaultConfig = {
    timeout: 3000,
    escape: 'json',
};
function mergeConfig(config1, config2) {
    var config = Object.assign({}, config1, config2);
    // merge headers
    config.headers = {};
    [config1.headers, config2.headers].forEach(function (conf) {
        if (isHeader(conf)) {
            conf.forEach(function (value, key) {
                var _a;
                Object.assign(config.headers, (_a = {},
                    _a[key] = value,
                    _a));
            });
        }
        else {
            config.headers = Object.assign(config.headers, conf);
        }
    });
    config.url = mergeURL(config.baseURL, config.url, config.params);
    return config;
}
function mergeURL(baseURL, url, params) {
    if (baseURL === void 0) { baseURL = ''; }
    if (params === void 0) { params = {}; }
    var uri = isAbsoluteURL(url) ? url : "" + baseURL + url;
    // object -> url params
    var serializedParams = '', _temp = [];
    for (var key in params) {
        _temp.push(key + "=" + params[key]);
    }
    serializedParams = _temp.join('&');
    if (serializedParams) {
        uri += (uri.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return uri;
}
var EasyFetch = /** @class */ (function () {
    function EasyFetch(globalConfig) {
        if (globalConfig === void 0) { globalConfig = {}; }
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager(),
        };
        this.defaults = Object.assign({}, defaultConfig, globalConfig);
    }
    EasyFetch.prototype.request = function (config) {
        if (config.method) {
            config.method = config.method.toUpperCase();
        }
        else {
            config.method = 'GET';
        }
        config = mergeConfig(this.defaults, config);
        var chain = [request, undefined];
        var promise = Promise.resolve(config);
        this.interceptors.request.forEach(function unshift(interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        this.interceptors.response.forEach(function push(interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    };
    return EasyFetch;
}());

function createInstance(defaultConfig) {
    if (defaultConfig === void 0) { defaultConfig = {}; }
    var context = new EasyFetch(defaultConfig);
    var instance = EasyFetch.prototype.request.bind(context);
    instance = Object.assign(instance, EasyFetch.prototype, context);
    return instance;
}

export { createInstance };
