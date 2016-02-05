'use strict';

var Promise = require('bluebird');

function asyncHello(what, callback) {
    setTimeout(function() { callback(null, 'Hello ' + what); }, 100);
}

function asyncFail(what, callback) {
    setTimeout(function() { callback('I fail, therefore I am'); }, 100);
}


// 1. write promisedHello using Promise.defer calling asyncHello
function promisedHello(what) {
}
// 2. Write promisedFail using Promise.defer calling asyncFail
function promisedFail(what) {
}

// 3. write promisifyHello using Promise.promisify calling asyncHello
function promisifyHello(what) {
}

// 5. Call a array of functions in parallel and collect their result
function parallel(promises) {
}

// 6. Call a array of functions in sequence and collect their results.
function series(promises) {
}

module.exports.asyncHello = asyncHello;
module.exports.asyncFail = asyncFail;
module.exports.promisedHello = promisedHello;
module.exports.promisedFail = promisedFail;
module.exports.promisifyHello = promisifyHello;
module.exports.parallel = parallel;
module.exports.series = series;
