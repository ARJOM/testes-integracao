const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('Usuários', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll( async () => {
        await connection.destroy();
    })

    it('cadastro de usuário com todas as informações corretas', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: "francimar",
                email: "jose2010@gmail.com",
                password: "mudar123"
            });
        expect(response.body).toHaveProperty("msg");
        expect(response.status).toBe(200);
    });
});