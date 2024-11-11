// Exemplo de dados para nutricionistas em Esteio
const nutritionists = [
  {
    name: "Dra. Fernanda Silva", // Nome da nutricionista
    address: "Rua Flores da Cunha, 123 - Centro, Esteio", // Endereço da nutricionista
    phone: "(51) 99999-9999", // Telefone de contato da nutricionista
    specialty: "Nutrição Esportiva" // Especialidade da nutricionista
  },
  {
    name: "Dra. Mariana Souza", // Nome da nutricionista
    address: "Av. Presidente Vargas, 456 - Centro, Esteio", // Endereço da nutricionista
    phone: "(51) 98888-8888", // Telefone de contato da nutricionista
    specialty: "Nutrição Clínica" // Especialidade da nutricionista
  },
  {
    name: "Dr. João Pereira", // Nome do nutricionista
    address: "Rua Bento Gonçalves, 789 - Centro, Esteio", // Endereço do nutricionista
    phone: "(51) 97777-7777", // Telefone de contato do nutricionista
    specialty: "Nutrição Funcional" // Especialidade do nutricionista
  }
];

// Função para exibir a lista de nutricionistas na página
function displayNutritionists() {
  let cidade = sessionStorage.getItem("cidade")
  document.getElementById("titulo").innerText = `Nutricionistas em ${cidade}`;
  console.log(cidade)

  const list = document.getElementById('nutritionist-list'); // Obtém o elemento da lista pelo ID

  nutritionists.forEach(nutritionist => { // Percorre o array de nutricionistas
      const listItem = document.createElement('li'); // Cria um novo elemento de lista <li>
      listItem.innerHTML = `
          <h2>${nutritionist.name}</h2> <!-- Exibe o nome do nutricionista -->
          <p><strong>Endereço:</strong> ${nutritionist.address}</p> <!-- Exibe o endereço -->
          <p><strong>Telefone:</strong> ${nutritionist.phone}</p> <!-- Exibe o telefone -->
          <p><strong>Especialidade:</strong> ${nutritionist.specialty}</p> <!-- Exibe a especialidade -->
      `;
      list.appendChild(listItem); // Adiciona o item da lista ao elemento pai
  });
}

// Exibe a lista de nutricionistas quando a página é carregada
document.addEventListener('DOMContentLoaded', displayNutritionists); 
// Adiciona um evento que dispara a função displayNutritionists quando o conteúdo da página é completamente carregado
