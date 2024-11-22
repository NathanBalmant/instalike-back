// Importa o framework Express para criar e gerenciar o servidor.
import express from "express";
import routes from "./src/routes/postRoutes.js";

// Cria uma instância do Express para gerenciar as rotas e requisições.
const app = express();
app.use(express.static("uploads"));
routes(app)

// Define a porta do servidor e inicia o servidor ouvindo requisições na porta 3000.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
