<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mskput

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replace elements of an array with provided values according to a provided mask array.



<section class="usage">

## Usage

```javascript
import mskput from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskput@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-mskput/tags). For example,

```javascript
import mskput from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskput@v0.1.1-esm/index.mjs';
```

#### mskput( x, mask, values, mode )

Replaces elements of an array with provided values according to a provided mask array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20, 40 ], 'strict' );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **values**: values to set.
-   **mode**: string specifying behavior when the number of `values` does not equal the number of falsy `mask` values.

The function supports the following modes:

-   `'strict'`: specifies that the function must raise an exception when the number of `values` does not **exactly** equal the number of falsy `mask` values.
-   `'non_strict'`: specifies that the function must raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'strict_broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the number of `values` does not **exactly** equal the number of falsy `mask` values.
-   `'broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'repeat'`: specifies that the function must reuse provided `values` when replacing elements in `x` in order to satisfy the `mask` array.

In broadcasting modes, the function supports broadcasting a `values` array containing a single element against the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20 ], 'strict_broadcast' );
// returns [ 1, 20, 3, 20 ]

var bool = ( out === x );
// returns true
```

In repeat mode, the function supports recycling elements in a `values` array to satisfy the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 0, 0, 1, 0 ], [ 20, 40 ], 'repeat' );
// returns [ 20, 40, 3, 20 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   If a `mask` array element is falsy, the corresponding element in `x` is **replaced**; otherwise, the corresponding element in `x` is "masked" and thus left unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import filledBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs';
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs';
import mskput from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskput@esm/index.mjs';

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate a random mask array:
var N = discreteUniform( 5, 15 );
var mask = filledBy( N, bernoulli.factory( 0.3 ) );
console.log( mask );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2000 ) );
console.log( values );

// Update a random sample of elements in `x`:
var out = mskput( x, mask, values, 'non_strict' );
console.log( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-mskput.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-mskput

[test-image]: https://github.com/stdlib-js/array-base-mskput/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/array-base-mskput/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-mskput/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-mskput?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-mskput.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-mskput/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-mskput/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-mskput/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-mskput/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-mskput/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-mskput/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-mskput/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-mskput/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-mskput/main/LICENSE

</section>

<!-- /.links -->
