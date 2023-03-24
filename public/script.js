const input = document.getElementById('prompt');
const monitor = document.getElementById('monitor');

// Cria a variavel do botão de envio
const sendButton = document.getElementById("send-button");

// Cria a variavel do botão de limpeza
const clearButton = document.querySelector("#clear-button");

// Adiciona um evento ao clicar no botão de envio
clearButton.addEventListener("click", () => {
  monitor.innerHTML = "";
});

// Faz com que o enter mande a mensagem
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendButton.click();
  }
});

// Adiciona um evento de clique ao botão de envio sendButton). ao clicar, cria uma variável "inputText" que contém o valor do texto que foi digitado no campo de entrada (input). Em seguida, ele cria um novo elemento <p> (parágrafo) que contém o texto digitado e adiciona-o como um filho do elemento "monitor". Depois disso, o código limpa o campo de entrada.
sendButton.addEventListener('click', function() {
  const inputText = input.value;
  const message = document.createElement('p');
  message.textContent = inputText;
  monitor.appendChild(message);
  input.value = '';
});


sendButton.addEventListener('click', function() {
  sendButton.classList.add('button-large');
  
  setTimeout(function() {
    sendButton.classList.remove('button-large');
  }, 200);
});

const socket = io();

socket.on('connect', () => {
  monitor.innerText = 'Loading...\n';
});

socket.on('data', (data) => {
  if (data === '%clear%') {
    monitor.innerText = '';
    return;
  }

  monitor.innerText += data;
});

input.addEventListener('keyup', async (ev) => {
  if (ev.key !== 'Enter') return;
  
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: ev.target.value }),
  };

  const request = await fetch('/', config);
  console.log(request.status);
});
