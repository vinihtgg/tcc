// api/index.js
import express from 'express';
const app = express();

app.get('/users', (req, res) => {
  // AQUI VOCÊ FARIA A CONEXÃO E CONSULTA AO SEU BANCO DE DADOS
  // Usando variáveis de ambiente para a conexão segura.
  // Exemplo: process.env.DB_HOST, process.env.DB_USER, etc.

  // Por enquanto, vamos retornar dados mockados (falsos)
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  
  res.status(200).json(users);
});

// Isso é necessário para que o Vercel trate este arquivo como uma função sem servidor
export default app;