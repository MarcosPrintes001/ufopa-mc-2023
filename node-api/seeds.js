import Book from "./models/books.js";

const books = [
  {
    nome: "Livro 1",
    genres: ["Ação", "Aventura"],
  },
  {
    nome: "Livro 2",
    genres: ["Terror", "Suspense", "Ficção científica"],
  },
];

export const createBooks = () => {
  return books.map(
    async (book) =>
      await Book.create({
        title: book.nome,
        genres: book.genres,
      })
  );
};
