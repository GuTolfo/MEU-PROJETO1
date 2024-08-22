// Exemplo de dados para nutricionistas em Esteio
const nutritionists = [
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
    }
  ];
  
  function displayNutritionists() {
    const list = document.getElementById('nutritionist-list');
  
    nutritionists.forEach(nutritionist => {
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
  