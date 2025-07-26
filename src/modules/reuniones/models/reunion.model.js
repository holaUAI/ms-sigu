class Reunion {
    constructor(
        idReunionZoom,
        c_codfac,
        c_codcur,
        c_codesp,
        temaReunion,
        fechaInicioReunion,
        fechaFinReunion,
        duracion_minutos
    ) {
        this.idReunionZoom = idReunionZoom;
        this.c_codfac = c_codfac;
        this.c_codcur = c_codcur;
        this.c_codesp = c_codesp;
        this.temaReunion = temaReunion;
        this.fechaInicioReunion = fechaInicioReunion;
        this.fechaFinReunion = fechaFinReunion;
        this.duracion_minutos = duracion_minutos;
    }

    static async getAll(conexion) {
        const [result] = await conexion.query(
            `SELECT 
                rz.idReunionZoom, 
                rz.c_codfac, 
                rz.c_codcur, 
                rz.c_codesp, 
                rz.temaReunion, 
                rz.fechaInicioReunion, 
                rz.fechaFinReunion, 
                rz.duracion_minutos
             FROM sga_reuniones_zoom AS rz`
        );
        return result;
    }
}

export default Reunion;
