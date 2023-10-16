import React, { useState, useEffect} from 'react'
import Pagina1 from './componentes/Pagina1'
import Pagina2 from './componentes/Pagina2'

export default function App(){

  const [pagina, setPagina] = useState(0)

  useEffect(
    () => {
      const url = window.location.href //Armazena a url
      const res = url.split('?')
      /* Tranforma a url em um array de 2 posições, onde:
            [0] = http://localhost:3000
            [1] = NUMERO PASSADO COMO PARAMETRO
      */
     setPagina(res[1])

    }
  )

  const LinksPaginas = (p) => {
    if(p == 1){
      window.open('http://localhost:3000?1')
        // Para o ? significa que esta passando um parametro pra URL
    }else if(p == 2){
      window.open('http://localhost:3000?2')
    }
  }

  const retornarPagina = () => {
    if(pagina == 1){
      return <Pagina1 />
    }else if(pagina == 2){
      return <Pagina2 />
    }else{
      return(
        <div>
          <button onClick={() => LinksPaginas(1)}>Página 1</button>
          <button onClick={() => LinksPaginas(2)}>Página 2</button>
        </div>
      )
    }
  }
  
  return(
    <>
      {retornarPagina()}
      
    </>
  )

}


