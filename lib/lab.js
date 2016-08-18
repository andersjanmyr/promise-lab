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
  return new Promise((resolve, reject) => {
    asyncHello(what, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });

}
// 2. Write promisedFail using new Promise calling asyncFail
function promisedFail(what) {
  return new Promise((resolve, reject) => {
    asyncFail(what, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
}

// 3. write promisifyHello using Promise.promisify calling asyncHello
var promisifyHello = Promise.promisify(asyncHello);

// 5. Call a array of functions in parallel and collect their result
function parallel(promises) {
  return Promise.all(promises);
}

module.exports.asyncHello = asyncHello;
module.exports.asyncFail = asyncFail;
module.exports.promisedHello = promisedHello;
module.exports.promisedFail = promisedFail;
module.exports.promisifyHello = promisifyHello;
module.exports.parallel = parallel;
