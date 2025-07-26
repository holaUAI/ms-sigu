import { ControllerBase } from "../../shared/controller-base.js";
import Docente from "../models/docente.model.js";

class DocenteController extends ControllerBase {
    async getAll(_, res) {
        try {
            const docentes = await Docente.getAll(this.getDbPool());
            res.json(docentes);
        } catch (error) {
            this.handleError(res, 500, error, "Error al obtener los docentes");
        }
    }
}

export default new DocenteController();
