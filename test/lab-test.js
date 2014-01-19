'use strict';

var Q = require('q');
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
                expect(err).to.equal('I fail, therefore I am');
                done();
            });
        });
    });

    describe('promisedHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisedHello('Sloth').then(function(hello) {
                expect(hello).to.equal('Hello Sloth');
                done();
            });
        });
    });

    describe('promisedFail', function() {
        it('calls then with hello after a while', function(done) {
            lab.promisedFail('Sloth').catch(function(err) {
                expect(err).to.equal('I fail, therefore I am');
                done();
            });
        });
    });

    describe('nfcallHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.nfcallHello('Aardvark').then(function(hello) {
                expect(hello).to.equal('Hello Aardvark');
                done();
            });
        });
    });

    describe('nbindHello', function() {
        it('calls then with hello after a while', function(done) {
            lab.nbindHello('Aardvark').then(function(hello) {
                expect(hello).to.equal('Hello Aardvark');
                done();
            });
        });
    });

    describe('parallel', function() {
        var p1 = Q.nfcall(lab.asyncHello, 'Tapir');
        var p2 = Q.nfcall(lab.asyncHello, 'Sloth');
        var p3 = Q.nfcall(lab.asyncHello, 'Anteater');
        var p4 = Q.nfcall(lab.asyncFail, 'Anteater');

        it('calls function in parallel', function(done) {
            lab.parallel([p1, p2, p3]).then(function(results) {
                expect(results.length).to.equal(3);
                done()
            });
        });
        it('calls function in parallel and fails', function(done) {
            lab.parallel([p1, p2, p3, p4]).catch(function(error) {
                expect(error).to.be.defined;
                done();
            });
        });
    });
    describe('series', function() {
        var p1 = Q.nfcall(lab.asyncHello, 'Tapir');
        var p2 = Q.nfcall(lab.asyncHello, 'Sloth');
        var p3 = Q.nfcall(lab.asyncHello, 'Anteater');
        var p4 = Q.nfcall(lab.asyncFail, 'Anteater');

        it('calls function in series', function(done) {
            lab.series([p1, p2, p3]).then(function(results) {
                expect(results.length).to.equal(3);
                done()
            });
        });
        it('calls function in series and fails', function(done) {
            lab.series([p1, p2, p3, p4]).catch(function(error) {
                expect(error).to.be.defined;
                done();
            });
        });
    });
});
