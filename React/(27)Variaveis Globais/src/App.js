import React, { useState } from 'react'
import Globais from './componentes/Globais'
import Info from './componentes/Info'

export default function App(){

  const [resumo, setResumo] = useState(Globais.resumo)

  const gravarResumo = () => {
    Globais.resumo = resumo
    // O conteudo de resumo e passado para Globais.resumo
  }

  const verResumo = () => {
    alert(Globais.resumo)
    // Mostra o conteudo de Globais.resumo
  }
  
  return(
   <>
      <Info />
      <hr />

      <p>{ 'Canal: ' + Globais.canal }</p>
      <p>{ 'Curso: ' + Globais.curso }</p>
      <p>{ 'Ano: ' + Globais.ano }</p>
      <hr />

      <input type="text" size='100' value={resumo} onChange={(e) => setResumo(e.target.value)}/>
      {/* 
        Value Contem o valor de resumo
        onChange = insere o conteudo do input em resumo
      */}
      <br />
      <button onClick={() => gravarResumo()}>Gravar Resumo</button>
      <button onClick={() => verResumo()}>Ver Resumo</button>
   </>
  )

}


