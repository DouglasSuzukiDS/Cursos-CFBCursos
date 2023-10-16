import React, { useState } from 'react'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App(){

  /*const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [nota3, setNota3] = useState(0)
  const [nota4, setNota4] = useState(0)

  return(
    <>
     <Nota num={1} nota={nota1} setNota={setNota1} />
     <Nota num={2} nota={nota2} setNota={setNota2} />
     <Nota num={3} nota={nota3} setNota={setNota3} />
     <Nota num={4} nota={nota4} setNota={setNota4} />
     <Resultado somaNotas={parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) } />
    </>
  )*/

  const [notas, setNotas] = useState({"nota1": "0", "nota2": "0", "nota3": "0", "nota4": "0", })
  const handleSetNotas = (e) => {

  }

  return(
    <>
     <Nota num={1} nota={notas.nota1} setNota={handleSetNotas} />
     <Nota num={2} nota={notas.nota2} setNota={handleSetNotas} />
     <Nota num={3} nota={notas.nota3} setNota={handleSetNotas} />
     <Nota num={4} nota={notas.nota4} setNota={handleSetNotas} />
     <Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4) } />
    </>
  )

}