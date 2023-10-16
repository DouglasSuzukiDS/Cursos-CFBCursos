import React from 'react'

import Logo from './componenetes/imgs/logo.png'

export default function App(){
  // const canal = 'CFB Cursos - youtube.com/cfbcursos'
  // const curso = 'Cruso de React'

  const canal = () => {
    return('CFB Cursos')
  }

  function curso(){
    return('Curso de React')
  }

  return(
    <section>

      <header>
        {/* <p>Canal: {canal}</p> */}
        <p>{'Canal: ' + canal()}</p>
        <p>{curso()}</p>
      </header>

      <section>
        <img src={Logo} />
        <img src='/img/Kakashi.jpg' /> {/* O apontamento foi direto porque ela esta inserida na pasta public */}   
      </section>
      
    </section>
  )
}

