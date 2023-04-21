import express from "express";
import codes from "./errors/codes.js";
import CustomError from "./errors/customError.js";
import { findVeiculosAll, findVeiculoById, insertVeiculo, updateVeiculo, deleteVeiculo } from "../repositories/veiculos.js";

const { OK, NOTFOUND, ACCEPTED, CREATED, NOCONTENT } = codes;

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let results = await findVeiculosAll();
    res.status(OK.statusCode).json(results);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    let result = await findVeiculoById(id);

    res.status(OK.statusCode).json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const data = req.body
  try {
    await insertVeiculo(data);
    // res.status(OK.statusCode).json(results);
    res.status(CREATED.statusCode).send("");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = req.body
  try {
    let result = await updateVeiculo(id, data);
    res.status(OK.statusCode).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await deleteVeiculo(id);
    res.status(NOCONTENT.statusCode).send(NOCONTENT.message);
  } catch (error) {
    next(error);
  }
});

export default router;
