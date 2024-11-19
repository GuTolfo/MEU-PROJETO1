document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3003/api/listar/post');
        const posts = await response.json();

        const postsContainer = document.getElementById('posts');
        posts.data.forEach(post => {
            addPostToList(post.title, post.userId || post.author, post.id);
        });
    } catch (error) {
        console.error('Erro ao carregar postagens:', error);
        alert('Não foi possível carregar as postagens.');
    }
});

document.getElementById("handleSubmit").addEventListener('click', async () => {
    let username = sessionStorage.getItem("nome");
    let id = sessionStorage.getItem("userId");
    const title = document.getElementById("title").value.trim();

    if (title === "") {
        alert("Por favor, insira uma mensagem antes de publicar.");
        return;
    }

    let data = { title, id, username };

    try {
        const response = await fetch('http://localhost:3003/api/salvar/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            alert('Erro ao publicar a postagem: ' + (errorResponse.message || 'Erro desconhecido.'));
            return;
        }

        const result = await response.json();
        addPostToList(result.title, result.userId || username, result.id);
        document.getElementById("title").value = "";
    } catch (error) {
        console.error('Erro ao publicar postagem:', error);
        alert('Erro ao publicar postagem.');
    }
});

function addPostToList(title, userId, postId) {
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
        <p class="post-title" id="post-title-${postId}">${title}</p>
        <div class="post-actions">
            <button id="deletar" onclick="deletar(${postId})">Deletar</button>
            <button id="editar" onclick="editar(${postId}, '${title}')">Editar</button>
        </div>
    `;
    postsList.prepend(newPost);
}

async function deletar(postId) {
    try {
        const response = await fetch(`http://localhost:3003/api/deletar/post/${postId}`, { method: 'DELETE' });
        const result = await response.json();

        if (result.success) {
            alert("Postagem deletada com sucesso.");
            document.getElementById(`post-title-${postId}`).parentElement.remove();
        } else {
            alert("Erro ao deletar postagem.");
        }
    } catch (error) {
        console.error('Erro ao deletar postagem:', error);
    }
}

function editar(postId, currentTitle) {
    const postTitleElement = document.getElementById(`post-title-${postId}`);
    postTitleElement.innerHTML = `
        <input type="text" id="edit-title-${postId}" value="${currentTitle}" style="width: 80%; padding: 5px;">
        <button onclick="salvarEdicao(${postId})" style="padding: 5px; background-color: #40aa4e; color: white; border: none; border-radius: 5px;">Salvar</button>
    `;
}

async function salvarEdicao(postId) {
    const editInput = document.getElementById(`edit-title-${postId}`);
    const newTitle = editInput.value.trim();

    if (newTitle === "") {
        alert("O título não pode estar vazio.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3003/api/editar/post/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle })
        });

        if (!response.ok) {
            alert("Erro ao editar a postagem.");
            return;
        }

        const postTitleElement = document.getElementById(`post-title-${postId}`);
        postTitleElement.innerHTML = newTitle;
    } catch (error) {
        console.error('Erro ao salvar edição:', error);
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
