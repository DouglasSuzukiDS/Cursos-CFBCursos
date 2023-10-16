import React, { useState } from 'react'
import Carro from './componentes/Carro'

export default function App(){
  const [carro, setCarro] = useState(true)
  const mostrarOcultarCarro = () => {
    setCarro(!carro)
  }
  
  return(
    // BIND = Cria uma função que quando ela é chamada, tera o this redefinido, sera apontado para outro elemento
    <>
      <h1>Componentes de Classe</h1>
      {carro ? <Carro fator={10}/> : ''}
      
      <button onClick={mostrarOcultarCarro}>
               Ocultar
      </button>
    </>
  )

}