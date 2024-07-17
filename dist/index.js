"use strict";var b=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var q=b(function(I,m){"use strict";var g=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),h=require("@stdlib/array-base-assert-is-boolean-data-type"),u=require("@stdlib/array-base-arraylike2object"),y=require("@stdlib/strided-base-reinterpret-complex"),p=require("@stdlib/strided-base-reinterpret-boolean"),f=require("@stdlib/array-base-count-falsy");function w(r,t,o){var i,n,e;for(n=o.length,i=0,e=0;e<r.length;e++)t[e]||(r[e]=o[i],i=(i+1)%n);return r}function N(r,t,o){var i,n,e,s,a,l,c,d,v;for(i=r.data,n=t.data,e=o.data,s=r.accessors[1],a=t.accessors[0],l=o.accessors[0],d=e.length,c=0,v=0;v<i.length;v++)a(n,v)||(s(i,v,l(e,c)),c=(c+1)%d);return i}function E(r,t,o){var i,n,e,s,a;for(i=t.data,n=t.accessors[0],s=o.length,e=0,a=0;a<r.length;a+=2)n(i,a/2)||(r[a]=o[e],r[a+1]=o[e+1],e=(e+2)%s);return r}function P(r,t,o){var i,n,e,s,a;for(i=t.data,n=t.accessors[0],s=o.length,e=0,a=0;a<r.length;a++)n(i,a)||(r[a]=o[e],e=(a+1)%s);return r}function B(r,t,o,i){var n,e,s,a;if(a=o.length,i==="strict"){if(f(t)!==a)throw new Error("invalid arguments. Number of values does not equal the number of falsy values in the mask array.")}else if(i==="broadcast"){if(a!==1&&f(t)>a)throw new Error("invalid arguments. Insufficient values to satisfy mask array.")}else if(i==="strict_broadcast"){if(a!==1&&f(t)!==a)throw new Error("invalid arguments. Number of values does not equal the number of falsy values in the mask array.")}else if(i==="non_strict"&&f(t)>a)throw new Error("invalid arguments. Insufficient values to satisfy mask array.");return n=u(r),e=u(t),s=u(o),n.accessorProtocol||e.accessorProtocol||s.accessorProtocol?g(n.dtype)&&g(s.dtype)?(E(y(r,0),e,y(o,0)),r):h(n.dtype)&&h(s.dtype)?(P(p(r,0),e,p(o,0)),r):(N(n,e,s),r):(w(r,t,o),r)}m.exports=B});var C=q();module.exports=C;
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
