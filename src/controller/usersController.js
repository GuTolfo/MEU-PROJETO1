const connection = require('../config/db');

async function cadastro(request, response) {
    let params = Array(
        request.body.name,
        request.body.cidade,
        request.body.password
    );
console.log(params)
    let query = "INSERT INTO users(name, cidade, password) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        if(results) {
        response
            .status(201)
            .json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "Sem Sucesso",
                data: err
            })
        }
    })
}

// Função que retorna todos usuários no banco de dados
async function login(request, response) {
    // Preparar o comando de execução no banco
    let params = [
        request.body.username,
        request.body.password
    ]
    console.log(params)

    connection.query('SELECT * FROM users WHERE name = ? AND password = ?', params, (err, results) => { 
        
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuarios com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os usuários.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}
module.exports = {
    cadastro, login
}