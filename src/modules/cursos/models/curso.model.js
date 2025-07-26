class Curso {
    constructor(
        c_codesp,
        c_codcur,
        c_nomcur,
        nomesp
    ) {
        this.c_codesp = c_codesp;
        this.c_codcur = c_codcur;
        this.c_nomcur = c_nomcur;
        this.nomesp = nomesp;
    }

    static async getAll(conexion) {
        const [result] = await conexion.query(
            "SELECT * FROM CURSOS_AND_ESPECIALIDAD"
        );
        return result;
    }
}

export default Curso;