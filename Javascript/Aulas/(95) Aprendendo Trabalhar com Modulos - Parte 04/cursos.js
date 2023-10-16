class Cursos {
   static cursos = ['Javascript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']
      // Com o STATIC aqui podemos usar a classe e seus métodos sem instanciar um novo OBJ

   constructor() {}

   static getTodosCursos = () => {
      return this.cursos
   }

   static getCurso = (i_curso) => {
      return this.cursos[i_curso]
   }

   static addCurso = (novoCurso) => {
      this.cursos.push(novoCurso)
   }

   static apagarCursos = (novoCurso) => {
      this.cursos = []
   }
}

export default Cursos