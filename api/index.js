// api/index.js
import express from 'express';
import cors from 'cors'; // <<< Importe o módulo CORS

const app = express();

// --------------------------------------------------
// PASSO 1: Configure o CORS AQUI
// --------------------------------------------------
const corsOptions = {
  // O '*' permite que QUALQUER domínio acesse sua API. 
  // Em produção, você mudaria isso para o domínio específico do seu app (se fosse um site).
  origin: '*', 
  // Permite os métodos que você usará (GET, POST, OPTIONS, etc.)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // Permite cabeçalhos específicos
  allowedHeaders: 'Content-Type, Authorization',
  // O status 200 é importante para o navegador após o 'pre-flight' (OPTIONS)
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions)); // <<< Use o CORS para todas as rotas
// --------------------------------------------------

app.get('/users', (req, res) => {
  // Dados mockados
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  
  // O CORS garante que a requisição do Expo não será bloqueada
  res.status(200).json(users);
});

// Isso é necessário para que o Vercel trate este arquivo como uma função sem servidor
export default app;