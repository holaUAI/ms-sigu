import { ControllerBase } from "../../shared/controller-base.js";
import Reunion from "../models/reunion.model.js";

class ReunionController extends ControllerBase {
    async getAll(_, res) {
        try {
            const reuniones = await Reunion.getAll(this.getDbPool());
            res.json(reuniones);
        } catch (error) {
            this.handleError(res, 500, error, "Error al obtener las reuniones");
        }
    }
}

export default new ReunionController();
