const qrcode = require('qrcode-terminal');
const nodemailer = require('nodemailer');
const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const client = new Client();

// Lê o arquivo que contém os emails e converte para um array de strings
const emails = fs.readFileSync('emails.txt', 'utf-8').split('\n');

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.initialize();

let transporter = nodemailer.createTransport({
  host: 'mail.shoppingdosarmarinhos.com.br', //CONFERIR SEU HOST SMTP!!
  port: 465,
  secure: true,
  auth: {
    user: 'no-reply@shoppingdosarmarinhos.com.br',//SEU EMAIL AQUI!!
    pass: 'w5fO6ur4Kjek',
  },
});

function enviarEmail(destinatario, assunto, conteudo) {
  let mailOptions = {
    from: 'no-reply@shoppingdosarmarinhos.com.br', //EMAIL QUE "ENVIA"
    to: destinatario,
    subject: assunto,
    html: conteudo,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}

client.on('message', message => {
  if (message.body === '!send') {
    let destinatario = emails; //EMAIL QUE RECEBE KKKK
    let assunto = 'Novidades em Aviamentos e Armarinhos - Confira as últimas tendências do mundo do Artesanato!';
    let conteudo = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Artesanato</title>
      <style>
        body {
          background-color: #fde6e6;
          font-family: Arial, sans-serif;
        }
  
        #container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
  
        h1 {
          text-align: center;
          color: #e44b5a;
        }
  
        p {
          text-align: center;
          color: #666666;
          font-size: 16px;
          line-height: 1.5;
          margin-top: 20px;
        }
  
        img {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          height: auto;
        }
  
        #button {
          display: block;
          margin: 0 auto;
          background-color: #e44b5a;
          color: #ffffff;
          text-decoration: none;
          text-align: center;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          margin-top: 40px;
        }
  
        #logo {
          display: block;
          margin: 0 auto;
          max-width: 200px;
          height: auto;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <div id="container">
        <h1>Artesanato</h1>
        <p>
          Confira nossos produtos de artesanato e materiais de costura em nosso site
          Shopping dos Armarinhos!
        </p>
        <a id="button" href="http://www.shoppingdosarmarinhos.com.br">Visitar o site</a>
        <img src="https://i.imgur.com/mBp1dAT.png" alt="Produto" />
        <img id="logo" src="https://i0.wp.com/shoppingdosarmarinhos.com.br/wp-content/uploads/2022/08/cropped-armarinhos-1.png?w=856&ssl=1" alt="Logo" />
      </div>
    </body>
  </html>`;
    enviarEmail(destinatario, assunto, conteudo);
    message.reply('E-mails enviados');
  }
});
