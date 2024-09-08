// Captura o botão principal e as divs com os botões secundários
const rootBtn = document.getElementById('root-btn');
const branch1 = document.getElementById('branch-1');
const branch2 = document.getElementById('branch-2');

// Adiciona o evento de clique ao botão principal
rootBtn.addEventListener('click', () => {
  // Mostra ou esconde os botões filhos ao clicar
  branch1.classList.toggle('hidden');
  branch2.classList.toggle('hidden');
});