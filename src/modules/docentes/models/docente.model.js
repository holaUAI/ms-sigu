class Docente {
    constructor(
        c_dni,
        c_apepat,
        c_apemat,
        c_nombres,
        cargo,
        condicion,
        categoria,
        fecha_ingreso,
        fecha_salida,
        n_estado
    ) {
        this.c_dni = c_dni;
        this.c_apepat = c_apepat;
        this.c_apemat = c_apemat;
        this.c_nombres = c_nombres;
        this.cargo = cargo;
        this.condicion = condicion;
        this.categoria = categoria;
        this.fecha_ingreso = fecha_ingreso;
        this.fecha_salida = fecha_salida;
        this.n_estado = n_estado;
    }

    static async getAll(conexion) {
        const [result] = await conexion.query(
            `SELECT 
                c_dni, 
                c_apepat, 
                c_apemat, 
                c_nombres, 
                cargo, 
                condicion, 
                n_estado 
             FROM tb_docune`
        );
        return result;
    }
}

export default Docente;
