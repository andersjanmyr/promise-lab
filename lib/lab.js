'use strict';

var Promise = require('bluebird');

function asyncHello(what, callback) {
    setTimeout(function() { callback(null, 'Hello ' + what); }, 100);
}

function asyncFail(what, callback) {
    setTimeout(function() { callback(new Error('I fail, therefore I am')); }, 100);
}


// 1. write promisedHello using new Promise calling asyncHello
function promisedHello(what) {
}
// 2. Write promisedFail using new Promise calling asyncFail
function promisedFail(what) {
}

// 3. write promisifyHello using Promise.promisify calling asyncHello
var promisifyHello = "todo";

// 4. Call a array of functions in parallel and collect their result
function parallel(promises) {
}

module.exports.asyncHello = asyncHello;
module.exports.asyncFail = asyncFail;
module.exports.promisedHello = promisedHello;
module.exports.promisedFail = promisedFail;
module.exports.promisifyHello = promisifyHello;
module.exports.parallel = parallel;
