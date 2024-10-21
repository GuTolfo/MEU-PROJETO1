const connection = require('../config/db');

async function salvarPost(request,response){
    let params=Array(
        request.body.title,
        // request.body.id
    )
    
    console.log(params)

    let query ="insert into posts(title) values(?);"

    connection.query(query,params,(err, results)=>{
        console.log(err, results)
        if (results){
            response
                .status(200)
                .json({
                    success:true,
                    massage:"sucesso",
                    data:results
                })
        } else{
            response
                .status(400)
                .json({
                    success:false,
                    massage:"sem sucesso",
                    data:results
                })
        }
    })
}

async function listarPosts(request, response) {

    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM posts', (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de posts com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os posts.`,
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


module.exports={
    salvarPost,
    listarPosts
}