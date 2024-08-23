const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
    request.body.title,
    request.body.description
); 


console.log("aqui")

    const query = "INSERT INTO tasks(title, description) VALUES(?,?)";

connection.query(query, params, (err, results) => {
    if(results) {
        response
        .status(201)
        .json({
            success: true,
            message: "Sucesso!",
            data: results
            })
        }    else {
            response
            .status(400)
            .Json({
            success: false,
            message: "Ops, deu problemal",
            sql: err
            })
        }
    })
}

async function getTask (request, response) {
        const query = "select * FROM Task";

        connection.query((err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results 
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Erro!",
                sql: err
            })
        }

    })
}

module.exports = {
    storeTask,
    getTask
}