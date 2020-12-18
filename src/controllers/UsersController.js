const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { password, name, email } = request.body;

        await connection('users').insert({
            email,
            name,
            password,
        });

        return response.json({msg: "Usuário registrado com sucesso"});
    },

    async list(request, response){
        const users = await connection('users').select('*');

        return response.json(users);
    },

}