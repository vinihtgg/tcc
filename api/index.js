// Arquivo: api/index.js

import express from 'express';
import cors from 'cors'; // Importação do CORS

const app = express();

// --- Configuração do CORS no Express ---
const corsOptions = {
    // Permite acesso de qualquer origem, essencial para Expo Snack
    origin: '*', 
    // Define os métodos permitidos (OPTIONS é necessário para o CORS pre-flight)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    credentials: true,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions)); // Aplica a configuração a todas as requisições

// Rota OPTIONS: Garante a resposta rápida para o pre-flight (redundante, mas útil)
app.options('*', cors(corsOptions)); 
// ------------------------------------

// Rota GET: Onde os dados são retornados
app.get('/users', (req, res) => {
  // Dados mockados (Falsos) para teste
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  // Resposta com status 200 (OK) e os dados em JSON
  res.status(200).json(users);
});

// Exporta o aplicativo Express como função serverless para o Vercel
export default app;