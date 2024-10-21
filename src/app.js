const express = require( 'express' );
const dotenv = require( 'dotenv'). config();

const postsRouter = require('./routes/postsRouter');
const usersRouter = require('./routes/usersRouter');

const cors = require ('cors');
const app = express();

app.set( 'port', process.env.PORT || 3003);
app.use(express.json());
app.use(cors());

app.use('/api/posts', postsRouter);
app.use('/api', usersRouter);

module.exports = app;

// document.addEventListener('DOMContentLoaded', function() {
//     var postagensSalvas = JSON.parse(localStorage.getItem('postagensSalvas')) || [];
//     var messagesDiv = document.getElementById('messages');
 
//     // Função para renderizar postagens
//     function renderPostagens() {
//         messagesDiv.innerHTML = '';
 
//         // Mostrar ou esconder o contêiner com base na presença de mensagens
//         if (postagensSalvas.length > 0) {
//             messagesDiv.style.display = 'block'; // Mostrar contêiner se houver mensagens
//         } else {
//             messagesDiv.style.display = 'none'; // Esconder contêiner se não houver mensagens
//         }
 
//         postagensSalvas.forEach(function(postagem, index) {
//             var messageItem = document.createElement('div');
//             messageItem.classList.add('message-item');
 
//             var p = document.createElement('p');
//             p.textContent = postagem;
 
//             var deleteButton = document.createElement('button');
//             deleteButton.classList.add('delete-button');
//             deleteButton.textContent = '🗑️';
//             deleteButton.addEventListener('click', function() {
//                 postagensSalvas.splice(index, 1);
//                 localStorage.setItem('postagensSalvas', JSON.stringify(postagensSalvas));
//                 renderPostagens();
//             });
 
//             messageItem.appendChild(p);
//             messageItem.appendChild(deleteButton);
//             messagesDiv.appendChild(messageItem);
//         });
//     }
 
//     // Renderizar postagens salvas ao carregar a página
//     renderPostagens();
 
//     // Adicionar evento de clique ao botão de comentar
//     document.getElementById('handleSubmit').addEventListener('click', function() {
//         var texto = document.getElementById('title').value;
//         if (texto) {
//             postagensSalvas.push(texto);
//             localStorage.setItem('postagensSalvas', JSON.stringify(postagensSalvas));
//             renderPostagens();
//             document.getElementById('title').value = ''; // Limpar o campo de entrada
//         }
//     });
 
//     // Adicionar evento de clique ao botão de cancelar (limpar postagens)
//     document.getElementById('handleClear').addEventListener('click', function() {
//         localStorage.removeItem('postagensSalvas');
//         postagensSalvas = [];
//         renderPostagens();
//     });
// });