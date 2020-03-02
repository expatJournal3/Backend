const request = require('supertest');
const server = require('../routes/api/server');

describe('register route', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
    
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })

    describe('POST /api/auth/register', () => { 
        it('should add the created user', function(done) {
            request(server)
            .post('/api/auth/register')
            .send({email: 'tester@email.com', password: 'pass'})
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
        })
    })
});


describe('login route', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })
    
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })

    describe('POST /api/auth/login', () => { 

        function loginUser(auth) {
            
            it('should login the user', function(done) {
                request(server)
                .post('/api/auth/login')
                .send({email: "test@email.com", password: "pass"})
                .expect(200)
                .end(onResponse);
                    function onResponse(err, res) {
                        auth.token = res.body.token;
                        return done();
                    }
            })
        };
    })
});