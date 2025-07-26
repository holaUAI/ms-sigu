import { Router } from "express";
import docenteController from "../controllers/docente.controller.js";

const DocenteRouter = Router();

DocenteRouter.get("/all", (req, res) => docenteController.getAll(req, res));

export default DocenteRouter;
