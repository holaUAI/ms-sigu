CREATE VIEW CURSOS_AND_ESPECIALIDAD AS
SELECT 
  curso.c_codesp, curso.c_codcur, curso.c_nomcur,
  especialidad.nomesp
FROM tb_plan_estudio_curso as curso
INNER JOIN tb_especialidad as especialidad
ON curso.c_codesp = especialidad.codesp;