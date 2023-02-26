import express from "express";
import codes from "./errors/codes.js";
import CustomError from "./errors/customError.js";

const { OK, NOTFOUND, ACCEPTED, CREATED } = codes;

const router = express.Router();

/**
 * Lista de livros (mock)
 */

const books = [
  {
    id: 1,
    nome: "Livro 1",
    generos: ["Ação", "Aventura"],
  },
  {
    id: 2,
    nome: "Livro 2",
    generos: ["Terror", "Suspense", "Ficção científica"],
  },
];

/**
 * Rota para listar todos os usuários
 */
router.get("/", async (req, res, next) => {
  try {
    res.status(OK.statusCode).json(books);
  } catch (error) {
    next(error);
  }
});

/**
 * Rota para mostrar um livro específico através do ID
 */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const indice = books.findIndex((book) => book.id === Number(id));
  try {
    if (indice === -1) {
      throw new CustomError(NOTFOUND);
    }
    res.status(OK.statusCode).json(books[indice]);
  } catch (error) {
    next(error);
  }
});

/**
 * Rota para criar livros
 */
router.post("/", async (req, res, next) => {
  try {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(CREATED.statusCode).json(book);
  } catch (error) {
    next(error);
  }
});

/**
 * Rota para modificar atributo de livros através do ID
 */
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const book = req.body;
  console.log(book);
  try {
    const result = books.find((book) => book.id == id);
    if (!result) {
      throw new CustomError(NOTFOUND);
    }
    /**
     * Precisamos remover o atributo ID do objeto
     * para nos assegurarmos o índice do banco de dados
     * não será alterado
     */
    delete book.id;
    Object.entries(result).forEach(([key, value]) => {
      if (book[key]) {
        result[key] = book[key];
      }
    });
    res.status(OK.statusCode).json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * Rota para deletar livros através do ID
 */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const indice = books.findIndex((book) => book.id === Number(id));
  try {
    if (indice === -1) {
      throw new CustomError(NOTFOUND);
    }
    books.splice(indice, 1);
    res.status(ACCEPTED).json(books);
  } catch (error) {
    next(error);
  }
});

export default router;
