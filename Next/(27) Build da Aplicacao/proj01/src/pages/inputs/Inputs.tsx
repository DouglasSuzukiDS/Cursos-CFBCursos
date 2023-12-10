import Globais from "@/components/Globais"
import { Topo } from "@/components/Topo"
import { useEffect, useState } from "react"

const cursos = ['HTML', 'React', 'C++', 'Javascript', 'Arduino', 'CSS']
const jCursos = [
   { 'curso': 'HTML' }, 
   { 'curso': 'React' }, 
   { 'curso': 'C++' }, 
   { 'curso': 'Javascript' }, 
   { 'curso': 'Arduivo' }, 
   { 'curso': 'CSS' }, 
]

export default function Inputs() {
   const [nome, setNome] = useState<string>('')
   const [curso, setCurso] = useState<string>('')

   useEffect(() => {
      Globais.curso = 'React'
   }, [])

   function fCursos() {
      return cursos.map((c: any) => {
         return <option key={ c } value={ c }>{ c }</option>
      })
   }

   const cCursos = jCursos.map((c: any) => {
      return <option key={ c.curso } value={ c.curso }>{ c.curso }</option>
   })

   return(
      <div>
         <Topo /> 
         <div className="campoForm">
            <label htmlFor="nome">Nome</label>
            <input 
               type="text" 
               name="nome" 
               value={ nome }
               onChange={ evt => setNome(evt.target.value) } />
         </div>

         <div className="campoForm">
            <label htmlFor="curso">Curso</label>
            <select name="curso" id="curso" 
               value={ curso }
               onChange={ evt => setCurso(evt.target.value) }>
               {/* { cursos.map((c: any) => (
                  <option key={ c } value={ c }>{ c }</option>
               )) } */}
               {
                  // fCursos()
                  cCursos
               }
            </select>
         </div>

         <div>
            <p>Nome digitado: { nome }</p>
            <p>Curso digitado: { curso }</p>
         </div>

         <div>
            <p>{ Globais.canal }</p>
            <p>{ Globais.curso }</p>
            <p>{ Globais.ano }</p>
         </div>
      </div>
   )
}