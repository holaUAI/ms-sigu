import { Router } from "express";
import reunionController from "../controllers/reunion.controller.js";

const ReunionRouter = Router();

ReunionRouter.get("/all", (req, res) => reunionController.getAll(req, res));

export default ReunionRouter;
