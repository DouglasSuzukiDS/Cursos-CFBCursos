import React from 'react'
import Globais from './Globais'

export default function App(){
  
  return(
   <>
      <p>{ 'Canal: ' + Globais.canal }</p>
      <p>{ 'Curso: ' + Globais.curso }</p>
      <p>{ 'Ano: ' + Globais.ano }</p>
      <hr />
   </>
  )

}


