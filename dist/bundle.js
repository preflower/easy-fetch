"use strict";function e(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}c((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(){this.handlers=[]}return e.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},e.prototype.eject=function(e){null!=this.handlers[e]&&(this.handlers[e]=null)},e.prototype.forEach=function(e){this.handlers.forEach((function(t){null!==t&&e(t)}))},e}(),r=Object.prototype.toString;function o(n){var o;return e(this,void 0,void 0,(function(){function i(){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e,t){setTimeout((function(){return t(new Error("TIMEOUT"))}),c)}))];case 1:return[2,e.sent()]}}))}))}var u,s,c,a,l,f=this;return t(this,(function(h){var d;return u=n.url,s=n.data,c=n.timeout,a=n.escape,l=
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
function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["url","data","timeout","escape"]),/^(GET|HEAD)$/i.test(null!==(o=l.method)&&void 0!==o?o:"GET")||(l.body=(d=s,"[object Object]"===r.call(d)?JSON.stringify(s):s)),[2,Promise.race([i(),window.fetch(u,l)]).then((function(n){return e(f,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return n.ok||304===n.status?[4,n[a]()]:[3,2];case 1:return[2,e.sent()];case 2:return[4,Promise.reject(n.status)];case 3:return[2,e.sent()]}}))}))})).catch((function(n){return e(f,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,Promise.reject(n)];case 1:return[2,e.sent()]}}))}))}))]}))}))}var i={timeout:3e3,escape:"json"};function u(e,t){var n=Object.assign({},e,t);return n.headers={},[e.headers,t.headers].forEach((function(e){var t;t=e,"[object Headers]"===r.call(t)?e.forEach((function(e,t){var r;Object.assign(n.headers,((r={})[t]=e,r))})):n.headers=Object.assign(n.headers,e)})),n.url=function(e,t,n){void 0===t&&(t="");void 0===n&&(n={});var r=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}(e)?e:""+t+e,o="",i=[];for(var u in n)i.push(u+"="+n[u]);null!=(o=i.join("&"))&&(r+=(r.includes("?")?"&":"?")+o);return r}(n.url,n.baseURL,n.params),n}var s=function(){function r(e){void 0===e&&(e={}),this.interceptors={request:new n,response:new n},this.defaults=Object.assign({},i,e)}return r.prototype.request=function(n){return e(this,void 0,void 0,(function(){var e,r;return t(this,(function(t){for(null!=n.method?n.method=n.method.toUpperCase():n.method="GET",e=[o,void 0],r=Promise.resolve(u(this.defaults,n)),this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length>0;)r=r.then(e.shift(),e.shift());return[2,r]}))}))},r}();exports.createInstance=function(e){void 0===e&&(e={});var t=new s(e),n=s.prototype.request.bind(t);return n=Object.assign(n,s.prototype,t)};
