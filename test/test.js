var request = require('supertest');
var app = require('../app.js');

describe('GET /', function () {
    it('respond with hello world', function (done) {
        request(app).get('/users').expect('respond with a resource', done);
    });
});
