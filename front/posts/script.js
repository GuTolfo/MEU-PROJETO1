let button = document.getElementById("handleSubmit");

button.onclick = function() {
    let title = document.getElementById("title").value;

    // Verifica se o campo de título não está vazio
    if (title.trim() !== "") {
        addPostToList(title);

        // Limpar o campo de título após a publicação
        document.getElementById("title").value = "";
    } else {
        alert("Por favor, insira uma mensagem antes de publicar.");
    }
}

function addPostToList(title) {
    const postsList = document.getElementById("posts");
    
    // Criar um novo item de lista
    const newPost = document.createElement("li");
    newPost.className = "post";
    
    newPost.innerHTML = `
        <div class="infoUserPost">
            <div class="imgUserPost"></div>
            <div class="nameAndHour">
                <strong>Gustavo Tolfo</strong>
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
