'use strict';

var Q = require('q');

function asyncHello(what, callback) {
    setTimeout(function() { callback(null, 'Hello ' + what); }, 100);
}

function asyncFail(what, callback) {
    setTimeout(function() { callback('I fail, therefore I am'); }, 100);
}


// 1. write promisedHello using Q.defer
function promisedHello(what) {
    var deferred = Q.defer();
    asyncHello(what, function(err, hello) {
        if (err) return deferred.reject(err);

        deferred.resolve(hello);
    });
    return deferred.promise;
}
// 2. Write promisedFail using Q.defer
function promisedFail(what) {
    var deferred = Q.defer();
    asyncFail(what, function(err, hello) {
        if (err) return deferred.reject(err);

        deferred.resolve(hello);
    });
    return deferred.promise;
}

// 3. write nfHello using Q.nfcall
function nfcallHello(what) {
    return Q.nfcall(asyncHello, what);
}

// 4. Write nfHello using Q.nbind
var nbindHello = Q.nbind(asyncHello);


// 5. Call a array of functions in parallel and collect their result
function parallel(promises) {
    return Q.all(promises);
}

// 6. Call a array of functions in sequence and collect their results.

module.exports.asyncHello = asyncHello;
module.exports.asyncFail = asyncFail;
module.exports.promisedHello = promisedHello;
module.exports.promisedFail = promisedFail;
module.exports.nfcallHello = nfcallHello;
module.exports.nbindHello = nbindHello;
module.exports.parallel = parallel;
