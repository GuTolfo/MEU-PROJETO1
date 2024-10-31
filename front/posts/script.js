document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3003/api/listar/post');
        const posts = await response.json();
        const postsContainer = document.getElementById('posts');
        const username = localStorage.getItem('username') || 'Anônimo'; // Nome do usuário logado ou 'Anônimo'

        posts.forEach(post => {
            addPostToList(post.title, post.userId || username);
        });
    } catch (error) {
        console.error('Erro ao carregar postagens:', error);
        alert('Não foi possível carregar as postagens.');
    }
});

document.getElementById("handleSubmit").addEventListener('click', async () => {
    const title = document.getElementById("title").value.trim();
    
    if (title === "") {
        alert("Por favor, insira uma mensagem antes de publicar.");
        return;
    }

    const username = localStorage.getItem('username') || 'Anônimo'; // Nome do usuário logado ou 'Anônimo'

    try {
        // Fazendo a requisição POST para enviar a postagem
        const response = await fetch('http://localhost:3003/api/salvar/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, userId: username }) // Enviando o título e autor
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('Erro da API:', errorResponse);
            alert('Erro ao publicar a postagem: ' + (errorResponse.message || 'Erro desconhecido.'));
            return;
        }

        const result = await response.json(); // Resultado da API após o POST
        console.log('Postagem publicada com sucesso:', result);

        // Adicionando a postagem ao feed
        addPostToList(result.title, result.userId || username);
        document.getElementById("title").value = ""; // Limpa o campo de texto após a postagem
    } catch (error) {
        console.error('Erro ao publicar postagem:', error);
        alert('Erro ao publicar postagem. Verifique sua conexão ou tente novamente mais tarde.');
    }
});

// Função para adicionar uma nova postagem ao feed visual
function addPostToList(title, userId) {
    const postsList = document.getElementById("posts");

    const newPost = document.createElement("li");
    newPost.className = "post";

    newPost.innerHTML = `
        <div class="infoUserPost">
            <div class="imgUserPost"></div>
            <div class="nameAndHour">
                <strong>${userId}</strong>
                <p>Agora mesmo</p>
            </div>
        </div>
        <p>${title}</p>
    `;

    postsList.prepend(newPost); // Insere a nova postagem no início da lista
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
