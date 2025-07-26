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

    // Método paginado
    static async getAll(conexion, page = 1, limit = 20) {
        const offset = (page - 1) * limit;

        const [rows] = await conexion.query(
            `SELECT 
                rz.idReunionZoom, 
                rz.c_codfac, 
                rz.c_codcur, 
                rz.c_codesp, 
                rz.temaReunion, 
                rz.fechaInicioReunion, 
                rz.fechaFinReunion, 
                rz.duracion_minutos
             FROM sga_reuniones_zoom AS rz
             ORDER BY fechaInicioReunion ASC
             LIMIT ? OFFSET ?`,
            [limit, offset]
        );

        // Contar total de registros
        const [countResult] = await conexion.query(
            `SELECT COUNT(*) AS total FROM sga_reuniones_zoom`
        );

        return {
            data: rows,
            total: countResult[0].total,
            page,
            pages: Math.ceil(countResult[0].total / limit),
        };
    }
}

export default Reunion;