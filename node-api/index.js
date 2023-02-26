import app from "./config/express.js";
import db from "./config/database.js";
import booksRoutes from "./routes/books.js";
import authorsRoutes from "./routes/authors.js";

import { createBooks } from "./seeds.js";

const port = process.env.PORT || 3000;

/**
 * Registra as rotas no aplicativo principal
 */
app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

/**
 * Middleware para erros
 */
app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Erro interno do servidor" });
});

/**
 * Inicia o servidor
 */
try {
  await db.authenticate();
  console.log("Conexão estabelecida com o banco de dados.");
  /**
   * Se você definir a opção force como 'true',
   * todas as tabelas serão descartadas e recriadas.
   */
  await db.sync({ force: true });
  /**
   * Cria os livros no banco de dados
   */
  // await createBooks();
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
} catch (error) {
  console.error("Não foi possível conectar ao banco de dados:", error);
}
