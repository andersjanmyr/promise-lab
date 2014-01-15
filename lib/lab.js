'use strict';

function delayedHello(callback) {
    setTimeout(function() { callback(null, 'Hello'); }, 100);
}

module.exports.delayedHello = delayedHello;
