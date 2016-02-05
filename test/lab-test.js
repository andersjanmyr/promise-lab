'use strict';

var Promise = require('bluebird');
var expect = require('chai').expect;
var lab = require('../lib/lab');

describe('lab', function() {
    describe('asyncHello', function() {
        it('calls callback with hello after a while', function(done) {
            lab.asyncHello('Tapir', function(err, hello) {
                expect(hello).to.equal('Hello Tapir');
                done();
            });
        });
    });

    describe('asyncFail', function() {
        it('calls callback with hello after a while', function(done) {
            lab.asyncFail('Tapir', function(err, hello) {
                expect(err).to.be.defined;
                done();
            });
        });
    });

    describe('promisedHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisedHello('Sloth').then(function(hello) {
                expect(hello).to.equal('Hello Sloth');
                done();
            }).catch(() =>{});
        });
    });

    describe('promisedFail', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisedFail('Sloth').catch(function(err) {
                expect(err.message).to.equal('I fail, therefore I am');
                done();
            });
        });
    });

    describe('promisifyHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisifyHello('Aardvark').then(function(hello) {
                expect(hello).to.equal('Hello Aardvark');
                done();
            });
        });
    });

    describe('promisifyHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisifyHello('Aardvark').then(function(hello) {
                expect(hello).to.equal('Hello Aardvark');
                done();
            });
        });
    });

    describe('parallel', function() {
        var p1 = Promise.promisify(lab.asyncHello)('Tapir');
        var p2 = Promise.promisify(lab.asyncHello)('Sloth');
        var p3 = Promise.promisify(lab.asyncHello)('Anteater');

        it('calls function in parallel', function(done) {
            lab.parallel([p1, p2, p3]).then(function(results) {
                expect(results.length).to.equal(3);
                done()
            });
        });
        it('calls function in parallel and fails', function(done) {
          var p4 = Promise.promisify(lab.asyncFail)('Anteater');
            lab.parallel([p1, p2, p3, p4]).catch(function(error) {
                expect(error).to.be.defined;
                done();
            });
        });
    });
});
