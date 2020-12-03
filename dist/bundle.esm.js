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
function t(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}c((r=r.apply(t,e||[])).next())}))}function e(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var n=function(){function t(){this.handlers=[]}return t.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},t.prototype.eject=function(t){null!=this.handlers[t]&&(this.handlers[t]=null)},t.prototype.forEach=function(t){this.handlers.forEach((function(e){null!==e&&t(e)}))},t}(),r=Object.prototype.toString;function o(n){var o;return t(this,void 0,void 0,(function(){function i(){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,e){setTimeout((function(){return e(new Error("TIMEOUT"))}),c)}))];case 1:return[2,t.sent()]}}))}))}var u,s,c,a,l,f=this;return e(this,(function(h){var d;return u=n.url,s=n.data,c=n.timeout,a=n.escape,l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(n,["url","data","timeout","escape"]),/^(GET|HEAD)$/i.test(null!==(o=l.method)&&void 0!==o?o:"GET")||(s instanceof window.FormData?l.body=s:(d=s,"[object Object]"===r.call(d)?l.body=JSON.stringify(s):l.body=s)),[2,Promise.race([i(),window.fetch(u,l)]).then((function(n){return t(f,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return n.ok||304===n.status?[4,n[a]()]:[3,2];case 1:return[2,t.sent()];case 2:return[4,Promise.reject(n.status)];case 3:return[2,t.sent()]}}))}))})).catch((function(n){return t(f,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,Promise.reject(n)];case 1:return[2,t.sent()]}}))}))}))]}))}))}var i={timeout:3e3,escape:"json"};function u(t,e){var n=Object.assign({},t,e);return n.headers={},[t.headers,e.headers].forEach((function(t){var e;e=t,"[object Headers]"===r.call(e)?t.forEach((function(t,e){var r;Object.assign(n.headers,((r={})[e]=t,r))})):n.headers=Object.assign(n.headers,t)})),n.url=function(t,e,n){void 0===e&&(e="");void 0===n&&(n={});var r=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}(t)?t:""+e+t,o="",i=[];for(var u in n)i.push(u+"="+n[u]);(o=i.join("&"))&&(r+=(r.includes("?")?"&":"?")+o);return r}(n.url,n.baseURL,n.params),n}var s=function(){function r(t){void 0===t&&(t={}),this.interceptors={request:new n,response:new n},this.defaults=Object.assign({},i,t)}return r.prototype.request=function(n){return t(this,void 0,void 0,(function(){var t,r;return e(this,(function(e){for(null!=n.method?n.method=n.method.toUpperCase():n.method="GET",t=[o,void 0],r=Promise.resolve(u(this.defaults,n)),this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length>0;)r=r.then(t.shift(),t.shift());return[2,r]}))}))},r}();function c(t){void 0===t&&(t={});var e=new s(t),n=s.prototype.request.bind(e);return n=Object.assign(n,s.prototype,e)}export{c as createInstance};
