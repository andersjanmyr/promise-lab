'use strict';

var lab = require('../lib/lab');
var expect = require('chai').expect;

describe('lab', function() {
    describe('delayedHello', function() {
        it('calls callback with hello after a while', function(done) {
            lab.delayedHello(function(err, hello) {
                expect(hello).to.equal('Hello');
                done();
            });
        });
    });
});
