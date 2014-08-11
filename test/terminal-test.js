/*
	The Cedric's Swiss Knife (CSK) - CSK terminal toolbox test suite
	
	Copyright (c) 2009 - 2014 Cédric Ronvel 
	
	The MIT License (MIT)
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

/* jshint unused:false */
/* global describe, it, before, after */


var term = require( '../lib/terminal.js' ) ;
var expect = require( 'expect.js' ) ;
var print = process.stdout.write.bind( process.stdout ) ;





			/* Helper functions */



//



			/* Tests */



describe( "colors" , function() {
	
	it( "should" , function( done ) {
		
		/*
		var format = require( '../lib/format' ) ;
		//console.log( format.count( '%i' ) ) ;
		console.log( format( 'format %2s %1s' , 'one' , 2.1 ) ) ;
		console.log( format( 'format %+1s > ' , 'one' , 2.1 ) ) ;
		done() ;
		return ;
		//*/
		
		print( term.esc.blue.on + 'Blue' ) ;
		print( 'normal' ) ;
		term.red( 'Red' ) ;
		print( ' normal' ) ;
		term.red( 'Red' ) ;
		print( ' normal' ) ;
		term.bold.underline.red( 'Bold-underline-red' ) ;
		term.green.strike( 'Green-strike' ) ;
		term.magenta.italic( 'Magenta-italic' ) ;
		term.blink( 'Blink' ) ;
		print( term.esc.blue.on + 'Blue' ) ;
		term.styleReset() ; print( 'normal' ) ;
		
		term.windowTitle( 'wonderful title' ) ;
		
		term.up( 4 ) ;
		term.red( 'up 4' ) ;
		
		term.moveTo( 1 , 1 ) ;
		term.blue( 'origin' ) ;
		
		//term.moveToLowerLeft() ; print( 'lowerleft!' ) ;
		
		process.stdin.setRawMode( true ) ;
		print( term.esc.mouseMotion.on ) ;
		
		process.stdin.on( 'data' , function( chunk ) {
			console.log( chunk ) ;
		} ) ;
		
		setTimeout( function() {
			print( term.esc.mouseMotion.off ) ;
			done() ;
		} , 1500 ) ;
	} ) ;
} ) ;


