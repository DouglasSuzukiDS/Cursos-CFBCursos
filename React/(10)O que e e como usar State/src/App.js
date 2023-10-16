import React, { useState } from 'react'
import Numero from './componentes/Numero'
import './App.css'

export default function App(){

  const [num, setNum] = useState(10)
  const [nome, setNome] = useState('Mustermann')

  let n1 = 50
  const n100 = () => {
    n1 = 100
    console.log(n1)
  }
  
  return(
    <>
      <p>Valor do state num em num em App: {num}</p>
      <Numero num={num} setNum={setNum}/>
      <p>{nome}</p>
    </>
  )
}

