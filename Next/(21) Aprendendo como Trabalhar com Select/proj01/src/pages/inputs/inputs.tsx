import { Topo } from "@/components/Topo"
import { useState } from "react"

export default function Inputs() {
   const [nome, setNome] = useState<string>('')
   const [curso, setCurso] = useState<string>('')

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
               <option value=""></option>
               <option value="HTML">HTML</option>
               <option value="React">React</option>
               <option value="C++">C++</option>
               <option value="Javascript">Javascript</option>
               <option value="Arduino">Arduino</option>
               <option value="CSS">CSS</option>
            </select>
         </div>

         <div>
            <p>Nome digitado: { nome }</p>
            <p>Curso digitado: { curso }</p>
         </div>
      </div>
   )
}