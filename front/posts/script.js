document.addEventListener('DOMContentLoaded', async () => {
    // Carregar postagens existentes
    const response = await fetch('http://localhost:3003/api/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('posts');
    const username = localStorage.getItem('username'); // Recupera o nome do usuário logado

    posts.forEach(post => {
        const postElement = document.createElement('li');
        postElement.className = 'post';

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <p class="author">Autor: ${post.author || username}</p>
        `;

        postsContainer.appendChild(postElement);
    });
});

document.getElementById("handleSubmit").addEventListener('click', async () => {
    let title = document.getElementById("title").value;

    // Verifica se o campo de título não está vazio
    if (title.trim() !== "") {
        const username = localStorage.getItem('username'); // Recupera o nome do usuário logado

        // Adiciona a postagem ao banco de dados
        const response = await fetch('http://localhost:3003/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author: username })
        });

        const result = await response.json();

        if (result.success) {
            addPostToList(title, username);
        } else {
            alert('Falha ao publicar: ' + result.message);
        }

        // Limpar o campo de título após a publicação
        document.getElementById("title").value = "";
    } else {
        alert("Por favor, insira uma mensagem antes de publicar.");
    }
});

function addPostToList(title, author) {
    const postsList = document.getElementById("posts");

    // Criar um novo item de lista
    const newPost = document.createElement("li");
    newPost.className = "post";

    newPost.innerHTML = `
        <div class="infoUserPost">
            <div class="imgUserPost"></div>
            <div class="nameAndHour">
                <strong>${author}</strong>
                <p>Agora mesmo</p>
            </div>
        </div>
        <p>${title}</p>
    `;

    // Adicionar o novo post ao início da lista
    postsList.prepend(newPost);
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
