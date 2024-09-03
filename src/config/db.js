// Importa o módulo 'mysql2', que permite a conexão com o banco de dados MySQL.
const mysql = require('mysql2');

// Importa e carrega variáveis de ambiente de um arquivo .env para o processo usando 'dotenv'.
const dotenv = require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente fornecidas no arquivo .env.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,       // Define o host do banco de dados.
    user: process.env.DB_USER,       // Define o nome de usuário para acessar o banco de dados.
    password: process.env.DB_PASSWORD, // Define a senha do usuário para acessar o banco de dados.
    database: process.env.DB_DATABASE // Define o nome do banco de dados a ser utilizado.
});

// Estabelece a conexão com o banco de dados.
connection.connect(function(err) {
    if(err) { // Verifica se houve um erro ao tentar se conectar.
        throw err; // Se houver um erro, lança uma exceção.
    } else {
        console.log("MySql conectado!"); // Se a conexão for bem-sucedida, exibe a mensagem no console.
    }
});

// Exporta a conexão para que possa ser utilizada em outros arquivos do projeto.
module.exports = connection;
