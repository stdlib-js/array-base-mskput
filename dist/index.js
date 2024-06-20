"use strict";var q=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var m=q(function(j,y){"use strict";var g=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),p=require("@stdlib/array-base-assert-is-boolean-data-type"),f=require("@stdlib/array-base-arraylike2object"),l=require("@stdlib/strided-base-reinterpret-complex"),h=require("@stdlib/strided-base-reinterpret-boolean"),N=require("@stdlib/array-base-count-falsy");function w(r,a,t){var o,i,e;for(i=t.length,o=0,e=0;e<r.length;e++)a[e]||(r[e]=t[o],o=(o+1)%i);return r}function P(r,a,t){var o,i,e,c,n,u,s,d,v;for(o=r.data,i=a.data,e=t.data,c=r.accessors[1],n=a.accessors[0],u=t.accessors[0],d=e.length,s=0,v=0;v<o.length;v++)n(i,v)||(c(o,v,u(e,s)),s=(s+1)%d);return o}function b(r,a,t){var o,i,e,c,n;for(o=a.data,i=a.accessors[0],c=t.length,e=0,n=0;n<r.length;n+=2)i(o,n/2)||(r[n]=t[e],r[n+1]=t[e+1],e=(e+2)%c);return r}function B(r,a,t){var o,i,e,c,n;for(o=a.data,i=a.accessors[0],c=t.length,e=0,n=0;n<r.length;n++)i(o,n)||(r[n]=t[e],e=(n+1)%c);return r}function C(r,a,t,o){var i,e,c;if(o==="throw"&&N(a)>t.length)throw new Error("invalid arguments. Insufficient values to satisfy mask array.");return i=f(r),e=f(a),c=f(t),i.accessorProtocol||e.accessorProtocol||c.accessorProtocol?g(i.dtype)&&g(c.dtype)?(b(l(r,0),e,l(t,0)),r):p(i.dtype)&&p(c.dtype)?(B(h(r,0),e,h(t,0)),r):(P(i,e,c),r):(w(r,a,t),r)}y.exports=C});var D=m();module.exports=D;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
