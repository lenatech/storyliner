"use strict";var precacheConfig=[["/storyliner/index.html","c5889fdf4f45a8b80033f7316ce19f86"],["/storyliner/static/css/main.e95bdd13.css","e4f2fb9cc32c7e486ba378a73fca7b84"],["/storyliner/static/js/main.f65c7bc7.js","82c8efaf0f9c4bcddf3d54d409d97033"],["/storyliner/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/storyliner/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/storyliner/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/storyliner/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/storyliner/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/storyliner/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/storyliner/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/storyliner/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/storyliner/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/storyliner/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/storyliner/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/storyliner/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/storyliner/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/storyliner/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/storyliner/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/storyliner/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/storyliner/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/storyliner/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});