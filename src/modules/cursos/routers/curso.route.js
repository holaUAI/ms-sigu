import { Router } from "express";
import cursoController from "../controllers/curso.controller.js";

const CursoRouter = Router();

CursoRouter.get("/all", (req, res) => cursoController.getAll(req, res));

export default CursoRouter;