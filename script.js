// Pegando os elementos do DOM
const addButton = document.getElementById('addButton');
const compromissoInput = document.getElementById('compromisso');
const agendaList = document.getElementById('agendaList');

// Função para adicionar compromisso na lista
function adicionarCompromisso() {
  const compromisso = compromissoInput.value.trim();
  
  if (compromisso !== "") {
    // Criando o item da lista
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${compromisso}</span>
      <button class="delete">Excluir</button>
    `;
    
    // Adicionando o item à lista
    agendaList.appendChild(li);
    
    // Limpando o input após adicionar
    compromissoInput.value = "";

    // Adicionando funcionalidade de excluir
    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
      agendaList.removeChild(li);
    });
  } else {
    alert("Por favor, insira um compromisso.");
  }
}

// Adicionando evento de clique no botão
addButton.addEventListener('click', adicionarCompromisso);

// Adicionando evento de tecla Enter no campo de input
compromissoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    adicionarCompromisso();
  }
});
