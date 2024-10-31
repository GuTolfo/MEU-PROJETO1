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

module.exports = {
    cadastro
}