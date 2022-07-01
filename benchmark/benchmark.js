/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var isBuffer = require( '@stdlib/assert-is-buffer' );
var pkg = require( './../package.json' ).name;
var image = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var data;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		data = image();
		if ( !isBuffer( data ) ) {
			b.fail( 'should return a buffer object' );
		}
	}
	b.toc();
	if ( !isBuffer( data ) ) {
		b.fail( 'should return a buffer object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
