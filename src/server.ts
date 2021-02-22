import express, { request } from "express";

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Excluir
 * PATCH => Alteração específica
 */

// ==> (GET) http://localhost:3333

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

// ==> (POST) http://localhost:3333

app.post("/", (request, response) => {
  // Recebeu os dados para salvar
  return response.json({ message: "OS dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));
