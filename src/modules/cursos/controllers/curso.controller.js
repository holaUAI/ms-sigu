import { ControllerBase } from "../../shared/controller-base.js";
import Curso from "../models/curso.model.js";

class CursoController extends ControllerBase {
    async getAll(_, res) {
        try {
            const cursos = await Curso.getAll(this.getDbPool());
            res.json(cursos);
        } catch (error) {
            this.handleError(res, 500, error, "Error al obtener los curso");
        }
    }
}

export default new CursoController();