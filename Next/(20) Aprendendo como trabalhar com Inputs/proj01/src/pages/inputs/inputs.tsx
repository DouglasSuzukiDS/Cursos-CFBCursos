import { useState } from "react"

export default function Inputs() {
   const [nome, setNome] = useState<string>('')
   const [curso, setCurso] = useState<string>('')

   return(
      <div>
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
            <input 
               type="text" 
               name="curso" 
               value={ curso }
               onChange={ evt => setCurso(evt.target.value) } />
         </div>

         <div>
            <p>Nome digitado: { nome }</p>
            <p>Curso digitado: { curso }</p>
         </div>
      </div>
   )
}