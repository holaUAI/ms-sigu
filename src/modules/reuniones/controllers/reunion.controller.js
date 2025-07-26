import { ControllerBase } from "../../shared/controller-base.js";
import Reunion from "../models/reunion.model.js";

class ReunionController extends ControllerBase {
    async getAll(req, res) {
        try {
            // Obtener parámetros de query
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;

            const reuniones = await Reunion.getAll(this.getDbPool(), page, limit);

            res.json({
                status: "ok",
                ...reuniones,
            });
        } catch (error) {
            this.handleError(res, 500, error, "Error al obtener las reuniones");
        }
    }
}

export default new ReunionController();
