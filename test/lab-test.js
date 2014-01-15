'use strict';

var lab = require('../lib/lab');
var expect = require('chai').expect;

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
});
