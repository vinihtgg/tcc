// Arquivo: api/index.js (Usando require para máxima compatibilidade)

// Importações usando a sintaxe require:
const express = require('express');
const cors = require('cors');

const app = express();

// --- Configuração do CORS no Express ---
const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    credentials: true,
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

// Rota OPTIONS: Garante a resposta para o pre-flight
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
  
  res.status(200).json(users);
});

// Exporta o aplicativo Express usando module.exports (CommonJS)
module.exports = app;