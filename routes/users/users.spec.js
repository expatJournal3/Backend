
const db = require('../../database/connection');
const Users = require('./model.js');
const Paths = require('../paths/model.js');

const request = require('supertest');
const server = require('../api/server.js');

beforeAll( async () => {
    await db('paths').truncate();
})

describe('paths router', () => {
    describe('test environment', function () {
        it('should use the staging environment', function () {
            expect(process.env.NODE_ENV).toBe('staging');
        })
    })


    describe('insert()', function () {
        it('should add the created path', async () => {
            console.log('here');
            
            await Users.addPath({
                body: "Wednesday",
                title: "Hump Day",
                user_id: 1
            });
            
            const paths = await db('paths');
            expect(paths).toHaveLength(1);
        })
    })

    describe('GET /api/users/:id/paths', function() {
        let token = {};

            it('should login the user', function(done) {
                request(server)
                .post('/api/auth/login')
                .send({email: "tester1@email.com", password: "pass"})
                .expect(200)
                .end(onResponse);
                    function onResponse(err, res) {
                        token = res.body.token;
                        return done();
                    }
            });

        it('should require authorization', function() {
            
            return request(server)
            .get('/api/paths')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFt')
            .expect(401);
        });

        it('should return individual users posts', function () {
            console.log('TOKEN', token);
            
            return request(server)
            .get('/api/users/1/paths')
            .set('Authorization', token)
            .expect(200);

        });
    });

    
    describe('update()', function () {
        const changes = {
            body: "Wednesday!",
            title: "Hump Day"
        };
        const pathId = 1;
        it('should update the users path', async () => {
            console.log(changes, pathId);
            const res = await Paths.updatePath(changes, pathId)
            .then(updated => {
                console.log('updated', updated);
                expect(200);
            })
        });
    });
    
    describe('delete()', function() {
        const pathId = 1;

        it('should delete the user\'s path', async () => {
            await Paths.deletePath(pathId)
                .then(deleted => {
                    console.log('deleted', deleted);
                    expect(200);
                })
        })
    });

    describe('GET /api/paths', function()  {
        let auth = {};
        beforeAll((done) => {

            request(server)
            .post('/api/auth/register')
            .send({email: "testingg@email.com", password: "password"})
            .expect(200)
            .end(onResponse);
                
            function onResponse(err, res) {
                console.log(res.body.token);
                
                auth.token = res.body.token;
                return done();
            }
        })

        it('should require authorization', function() {
            
            return request(server)
            .get('/api/paths')
            .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFt')
            .expect(401);
        });
        
        it('should respond with JSON array', function() {
            console.log('auth', auth);
            return request(server)
            .get('/api/paths')
            .set('Authorization', auth.token)
            .expect(200);
        });
    })
})

