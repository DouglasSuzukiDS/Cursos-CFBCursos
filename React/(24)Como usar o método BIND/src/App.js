import React from 'react'
import Carro from './componentes/Carro'

export default function App(){
  
  return(
    // BIND = Cria uma função que quando ela é chamada, tera o this redefinido, sera apontado para outro elemento
    <>
      <h1>Componentes de Classe</h1>
      <Carro fator={10}/>
    </>
  )

}