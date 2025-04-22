# 🦙 Chat Alpaca

**Chat Alpaca** é uma interface web para interação com o modelo **Alpaca**, baseada em `alpaca.cpp`. O sistema permite conversas em linguagem natural diretamente do navegador utilizando um backend em Node.js com comunicação em tempo real via WebSockets.

---

## 🧩 Tecnologias Utilizadas

- **Node.js** v16.15.0+
- **npm** v8.5.5+
- **Socket.IO** – comunicação em tempo real
- **Bootstrap 5** – design responsivo
- **Font Awesome** – ícones sociais
- **Express.js** – servidor HTTP
- **Compromise.js** – NLP (Processamento de Linguagem Natural)
- **HTML/CSS/JavaScript** – frontend
- **child_process.spawn** – execução do modelo binário

---

## ⚙️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/chat-alpaca.git
   cd chat-alpaca
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o ambiente**
   - Copie o arquivo `.env.example` para `.env`:
     ```bash
     cp .env.example .env
     ```
   - Ajuste as variáveis conforme necessário.

4. **Baixe o modelo Alpaca**
   - Acesse: [ggml-alpaca-7b-q4.bin](https://huggingface.co/Sosaka/Alpaca-native-4bit-ggml/blob/main/ggml-alpaca-7b-q4.bin)
   - Coloque o modelo na raiz do projeto com o nome `chat` ou altere o código para apontar para o nome correto.

5. **Inicie a aplicação**
   ```bash
   npm run start
   ```

6. **Acesse no navegador**
   - Abra [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Funcionalidades

- Envio de mensagens via botão ou tecla *Enter*
- Histórico de mensagens visível no monitor
- Comunicação WebSocket em tempo real com o modelo
- Botão de limpeza do chat
- Estilização com Bootstrap para compatibilidade em diversos dispositivos
- Links diretos para redes sociais dos desenvolvedores

---

## 👨‍💻 Estrutura do Projeto

```
chat-alpaca/
├── public/
│   ├── index.html
│   └── imgs/
├── server.js
├── package.json
├── .env
├── chat (binário do modelo)
└── README.md
```

---

## 🙌 Autores

Este projeto foi desenvolvido por:

- **Lizzard Medeiros**  
  GitHub: [LizzardMedeiros](https://github.com/LizzardMedeiros)

- **Akinori Koerich**  
  GitHub: [AkinoriKoerich](https://github.com/AkinoriKoerich)

- **Alex Rodrigues**  
  GitHub: [AlexRodrigues2004](https://github.com/AlexRodrigues2004)

---

## 📝 Créditos e Referências

Este projeto foi inspirado e utiliza componentes dos seguintes projetos e repositórios:

- [alpaca.cpp](https://github.com/antimatter15/alpaca.cpp) – por antimatter15
- [LLaMA](https://github.com/facebookresearch/llama) – por Meta AI
- [Stanford Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html)
- [alpaca-lora](https://github.com/tloen/alpaca-lora)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Interactive Mode](https://github.com/ggerganov/llama.cpp/pull/61) – por Matvey Soloviev
- [Guia de introdução ao LLaMA](https://til.simonwillison.net/llms/llama-7b-m2) – por Simon Willison