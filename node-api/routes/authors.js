import express from "express";
import codes from "./errors/codes.js";
import CustomError from "./errors/customError.js";
import { getAllAuthors } from "../repositories/authors.js";

const { OK, NOTFOUND, ACCEPTED, CREATED } = codes;

const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    let results = await getAllAuthors();
    res.status(OK.statusCode).json(results);
  } catch (error) {
    next(error);
  }
});
export default router;
