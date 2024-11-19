// Dados dos nutricionistas para cada cidade
const nutritionists = {
  Esteio: [
    {
      name: "Dra. Fernanda Silva",
      address: "Rua Flores da Cunha, 123 - Centro, Esteio",
      phone: "(51) 99999-9999",
      specialty: "Nutrição Esportiva"
    },
    {
      name: "Dra. Mariana Souza",
      address: "Av. Presidente Vargas, 456 - Centro, Esteio",
      phone: "(51) 98888-8888",
      specialty: "Nutrição Clínica"
    },
    {
      name: "Dr. João Pereira",
      address: "Rua Bento Gonçalves, 789 - Centro, Esteio",
      phone: "(51) 97777-7777",
      specialty: "Nutrição Funcional"
    },
    {
      name: "Dra. Camila Almeida",
      address: "Rua do Comércio, 1010 - Esteio",
      phone: "(51) 96666-6666",
      specialty: "Nutrição Pediátrica"
    },
    {
      name: "Dra. Aline Costa",
      address: "Rua São Jorge, 567 - Centro, Esteio",
      phone: "(51) 95555-5555",
      specialty: "Nutrição Vegetariana"
    }
  ],
  "São Leopoldo": [
    {
      name: "Dra. Patricia Costa",
      address: "Rua dos Andradas, 234 - São Leopoldo",
      phone: "(51) 92222-2222",
      specialty: "Nutrição Esportiva"
    },
    {
      name: "Dr. Lucas Oliveira",
      address: "Av. Mauá, 789 - São Leopoldo",
      phone: "(51) 93333-3333",
      specialty: "Nutrição Clínica"
    },
    {
      name: "Dra. Julia Martins",
      address: "Rua dos Trens, 111 - São Leopoldo",
      phone: "(51) 94444-4444",
      specialty: "Nutrição Funcional"
    },
    {
      name: "Dra. Roberta Lima",
      address: "Av. Imperatriz Leopoldina, 456 - São Leopoldo",
      phone: "(51) 98888-8888",
      specialty: "Nutrição para Idosos"
    }
  ],
  Canoas: [
    {
      name: "Dr. Gabriel Costa",
      address: "Rua 15 de Janeiro, 123 - Canoas",
      phone: "(51) 91111-1111",
      specialty: "Nutrição Esportiva"
    },
    {
      name: "Dra. Luana Pereira",
      address: "Av. Farroupilha, 555 - Canoas",
      phone: "(51) 92222-2222",
      specialty: "Nutrição Clínica"
    },
    {
      name: "Dr. Gustavo Rocha",
      address: "Rua Santa Maria, 333 - Canoas",
      phone: "(51) 93333-3333",
      specialty: "Nutrição Funcional"
    }
  ],
  "Novo Hamburgo": [
    {
      name: "Dra. Viviane Oliveira",
      address: "Rua dos Gaviões, 789 - Novo Hamburgo",
      phone: "(51) 97777-7777",
      specialty: "Nutrição Esportiva"
    },
    {
      name: "Dra. Beatriz Costa",
      address: "Av. João Corrêa, 234 - Novo Hamburgo",
      phone: "(51) 96666-6666",
      specialty: "Nutrição Clínica"
    },
    {
      name: "Dr. Felipe Machado",
      address: "Rua São José, 654 - Novo Hamburgo",
      phone: "(51) 95555-5555",
      specialty: "Nutrição Funcional"
    }
  ]
};

// Função para exibir nutricionistas com base na cidade escolhida
function displayNutritionists() {
  const city = document.getElementById("city-select").value; // Obtém a cidade selecionada
  document.getElementById("titulo").innerText = `Nutricionistas em ${city}`; // Atualiza o título da página
  
  const list = document.getElementById('nutritionist-list');
  list.innerHTML = ''; // Limpa a lista antes de adicionar os novos itens

  // Percorre os nutricionistas da cidade selecionada
  nutritionists[city].forEach(nutritionist => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h2>${nutritionist.name}</h2>
      <p><strong>Endereço:</strong> ${nutritionist.address}</p>
      <p><strong>Telefone:</strong> ${nutritionist.phone}</p>
      <p><strong>Especialidade:</strong> ${nutritionist.specialty}</p>
    `;
    list.appendChild(listItem);
  });
}

// Exibe a lista de nutricionistas quando a página é carregada
document.addEventListener('DOMContentLoaded', displayNutritionists);
