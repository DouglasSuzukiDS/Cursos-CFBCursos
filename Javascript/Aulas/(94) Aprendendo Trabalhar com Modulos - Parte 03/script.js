// (94) Aprendendo Trabalhar com Modulos - Parte 03
// import getTodosCursos, { cursos } from "./cursos.js"
// import { cursos as c, getCurso as gc } from "./cursos.js"
import getTodosCursos from "./cursos.js"
import * as m_cursos from './cursos.js'

console.log(m_cursos.cursos)
console.log(m_cursos.getCurso([1]))
console.log(m_cursos.default())