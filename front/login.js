const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',  // Substitua por seu nome de usuário do MySQL
    password: 'sua_senha',  // Substitua pela sua senha do MySQL
    database: 'nutriplus'  // Nome do banco de dados que você criou
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados.');
});

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query para verificar as credenciais
    const query = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(query, [username], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const validPassword = await bcrypt.compare(password, results[0].password);
            if (validPassword) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Senha incorreta' });
            }
        } else {
            res.json({ success: false, message: 'Usuário não encontrado' });
        }
    });
});

// Servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
