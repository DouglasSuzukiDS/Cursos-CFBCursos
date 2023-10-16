import React, { useState } from 'react'
import Led from './componentes/Led'

export default function App(){
  
  const [ligado, setLigado] = useState(false)

  const cancelar = (obj) => {
    return obj.preventDefault()
  }

  return(
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a
        href='http://youtube.com/cfbcursos'
        target='_blank' rel="noreferrer"
        onClick={(e) => cancelar(e)}
      >
        CFB Cursos
      </a>
    </>
  )
}

