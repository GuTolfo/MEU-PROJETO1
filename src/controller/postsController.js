const connection = require('../config/db');

async function salvarPost(request, response) {
    let params = [
        request.body.title,
        request.body.id, // Adicionando o autor
        request.body.username
    ]

    console.log(params);

    let query = "INSERT INTO posts (title, user_id, autHor) VALUES (?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "sucesso",
                title: request.body.title, // Inclui o título retornado
                userId: request.body.userId, // Inclui o autor retornado
                name: request.body.name
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

async function deletarPost(request, response) {

    let postId = request.params.postId;
    console.log(postId);
    let query = 'DELETE FROM posts WHERE id = ?';

    connection.query(query, postId, (err, results) => { 
        if (results) {  
            response.status(200).json({
                success: true,
                message: 'Deletado!',
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'Não foi possível deletar.',
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
    });
}

async function editarPost(request, response) {
    const postId = request.params.postId;
    const { title } = request.body;

    const query = 'UPDATE posts SET title = ? WHERE id = ?';

    connection.query(query, [title, postId], (err, results) => {
        if (results) {
            response.status(200).json({ success: true, message: "Postagem editada com sucesso!" });
        } else {
            response.status(400).json({
                success: false,
                message: 'Erro ao editar postagem.',
                error: err
            });
        }
    });
}


module.exports = {
    salvarPost,
    listarPosts,
    deletarPost,
    editarPost
};
