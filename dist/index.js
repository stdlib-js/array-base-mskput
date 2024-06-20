"use strict";var w=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var q=w(function(I,m){"use strict";var g=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),l=require("@stdlib/array-base-assert-is-boolean-data-type"),f=require("@stdlib/array-base-arraylike2object"),h=require("@stdlib/strided-base-reinterpret-complex"),p=require("@stdlib/strided-base-reinterpret-boolean"),y=require("@stdlib/array-base-count-falsy");function N(r,a,e){var o,i,t;for(i=e.length,o=0,t=0;t<r.length;t++)a[t]||(r[t]=e[o],o=(o+1)%i);return r}function b(r,a,e){var o,i,t,c,n,u,s,d,v;for(o=r.data,i=a.data,t=e.data,c=r.accessors[1],n=a.accessors[0],u=e.accessors[0],d=t.length,s=0,v=0;v<o.length;v++)n(i,v)||(c(o,v,u(t,s)),s=(s+1)%d);return o}function P(r,a,e){var o,i,t,c,n;for(o=a.data,i=a.accessors[0],c=e.length,t=0,n=0;n<r.length;n+=2)i(o,n/2)||(r[n]=e[t],r[n+1]=e[t+1],t=(t+2)%c);return r}function B(r,a,e){var o,i,t,c,n;for(o=a.data,i=a.accessors[0],c=e.length,t=0,n=0;n<r.length;n++)i(o,n)||(r[n]=e[t],t=(n+1)%c);return r}function C(r,a,e,o){var i,t,c;if(o==="throw"&&y(a)>e.length)throw new Error("invalid arguments. Insufficient values to satisfy mask array.");if(o==="broadcast"&&e.length>1&&y(a)>e.length)throw new Error("invalid arguments. Insufficient values to satisfy mask array.");return i=f(r),t=f(a),c=f(e),i.accessorProtocol||t.accessorProtocol||c.accessorProtocol?g(i.dtype)&&g(c.dtype)?(P(h(r,0),t,h(e,0)),r):l(i.dtype)&&l(c.dtype)?(B(p(r,0),t,p(e,0)),r):(b(i,t,c),r):(N(r,a,e),r)}m.exports=C});var D=q();module.exports=D;
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
