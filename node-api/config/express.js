import express from "express";

/**
 * Criando servidor express
 */
const app = express();

/**
 * Configurações do Express
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
