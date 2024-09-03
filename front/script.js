// Obtém o botão pelo ID "handleSubmit"
let button = document.getElementById("handleSubmit");

// Define uma função assíncrona que será executada quando o botão for clicado
button.onclick = async function() {
    // Obtém o valor do campo de entrada com ID "title"
    let title = document.getElementById("title").value;

    // Cria um objeto de dados contendo apenas o título
    let data = { title };

    // Faz uma requisição HTTP POST para a API em 'http://localhost:3003/api/store/task'
    const response = await fetch('http://localhost:3003/api/store/task', {
        method: "POST", // Define o método HTTP como POST
        headers: { "Content-type": "application/json;charset=UTF-8" }, // Define o cabeçalho da requisição como JSON
        body: JSON.stringify(data) // Converte o objeto de dados para uma string JSON
    });

    // Aguarda a resposta da API e a converte para JSON
    let content = await response.json();

    // Verifica se a resposta da API indica sucesso
    if (content.success) {
        alert("Sucesso"); // Exibe uma mensagem de sucesso
    } else {
        alert('Não'); // Exibe uma mensagem de erro
    }
}
