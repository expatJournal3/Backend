/*

describe('Create new post /api/users/:id/paths', () => { 

    it('user can create a post', function () {
        return request(server)
            .post(`/api/users/1/paths`)
            .send({email: "test@email.com", password: "pass"})
            .set('Authorization', token)
            .send({
                title: 'New Testing Post',
                body: 'test'
            })
            .expect(201)
            .then(res => {
                console.log(res)
                expect(res.type).toMatch(/json/)
                expect(res.type).toHaveProperty(title)
                expect(res.type).toHaveProperty(body)
            });
    });
    /////////////////////////////
    const post = {
        title: "Hump Day", 
        body: "Wednesday" 
    } 
    log('post', post);
    function loginUser(auth) {
        log('auth', auth);
        it('should create new post', function(done) {
            request(server)
            .post('/api/users/1/paths')
            .send(post)
            .expect(201)
            .end(onResponse);
                function onResponse(err, res) {
                    auth.token = res.body.token;
                    return done();
                }
        })
    };
});

*/
const db = require('../../database/connection');
const Users = require('./model.js');
const Paths = require('../paths/model.js');

beforeEach( async () => {
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
            await Users.addPath({
                body: "Wednesday",
                title: "Hump Day",
                user_id: 1
            });

            const paths = await db('paths');
            expect(paths).toHaveLength(1);
        })
    })

    // describe('update()', function () {
    //     it('should updated the user\'s path', async () => {
    //         await Paths.updatePath({

    //         })
    //     })
    // })
});

