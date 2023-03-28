Título do Projeto: Enviando E-mails e Mensagens via WhatsApp com Node.js

Descrição: Este projeto consiste em um script em Node.js que utiliza as seguintes tecnologias para enviar e-mails e integrar o envio de mensagens via WhatsApp em uma plataforma de e-mail:

<span id="nodejs">Node.js</span>
<span id="nodemailer">nodemailer</span>
<span id="whatsappwebjs">whatsapp-web.js</span>
Com esta solução, é possível enviar e-mails e mensagens de texto pelo WhatsApp de forma automática, facilitando a comunicação com seus clientes ou contatos importantes.

Funcionalidades:

Envio de e-mails com nodemailer
Envio de mensagens de texto pelo WhatsApp com whatsapp-web.js
Integração entre envio de e-mails e mensagens de WhatsApp
Configuração personalizada de envio de e-mails e mensagens
Instruções de uso:

Clone este repositório em seu computador
Instale as dependências necessárias com npm install
Configure as credenciais para envio de e-mails e acesso ao WhatsApp
Execute o script com node index.js
Envie seus e-mails e mensagens automaticamente!
Tecnologias utilizadas:

<span class="typing" data-id="nodejs"></span>
<span class="typing" data-id="nodemailer"></span>
<span class="typing" data-id="whatsappwebjs"></span>
Autor: [Seu nome]

Licença: MIT License

<script>
const techs = {
  nodejs: "Node.js",
  nodemailer: "nodemailer",
  whatsappwebjs: "whatsapp-web.js"
}

const typingElements = document.querySelectorAll('.typing');

for (const el of typingElements) {
  const techName = el.getAttribute('data-id');
  const techText = techs[techName];
  const delay = 100;
  let i = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      el.innerText += techText.charAt(i);
      i++;

      if (i > techText.length - 1) {
        clearInterval(interval);
      }
    }, delay);
  }, 500);
}
</script>
