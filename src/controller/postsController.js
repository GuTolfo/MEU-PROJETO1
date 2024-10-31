const connection = require('../config/db');

async function salvarPost(request, response) {
    let params = [
        request.body.title,
        request.body.userId // Adicionando o autor
    ];

    console.log(params);

    let query = "INSERT INTO posts (title, user_id) VALUES (?, ?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso",
                title: request.body.title, // Inclui o título retornado
                userId: request.body.userId // Inclui o autor retornado
            });
        } else {
            response.status(400).json({
                success: false,
                message: "sem sucesso",
                data: results
            });
        }
    });
}

async function listarPosts(request, response) {
    connection.query('SELECT * FROM posts', (err, results) => { 
        if (results) {  
            response.status(200).json({
                success: true,
                message: 'Retorno de posts com sucesso!',
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'Não foi possível retornar os posts.',
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
    });
}

module.exports = {
    salvarPost,
    listarPosts
};
