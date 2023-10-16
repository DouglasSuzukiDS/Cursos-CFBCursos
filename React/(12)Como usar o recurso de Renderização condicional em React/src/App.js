import React, { useState } from 'react'

export default function App(){

  /*const [log, setLog] = useState(false)

  const msgLogin = () => {
    return 'Usuário Logado'
  }

  const msgLogoff = () => {
    return 'Favor Logar'
  }
  
  const cumprimento = () => {
    const hora = new Date().getHours()
    if(hora >= 0 && hora < 13){
      return <p>Bom Dia</p>
    }else if(hora >= 13 && hora < 18){
      return <p>Boa Tarde</p>
    }else{
      return <p>Boa Noite</p>
    }
  }

  return(
    <>
      {cumprimento()}
      <p>{log ? msgLogin() : msgLogoff()}</p>
      <button onClick={() => setLog(!log)}>{log ? 'Logoff' : 'Login'}</button>
    </>
  )*/

  const [cor, setCor] = useState(1)

  const vermelho = {color: '#F00'}
  const verde = {color: '#0F0'}
  const azul = {color: '#00F'}

  const retCor = (c) => {
    if(c === 1){
      return vermelho
    }else if(c === 2){
      return verde
    }else{
      return azul
    }
  }

  
  const mudaCor = () => {
    setCor(cor + 1)
    if(cor > 2){
      setCor(1)
    }
  }

  setInterval(mudaCor, 1000)

  return(
    <>
    <h1 style={retCor(cor)}>CFB Cursos</h1>
      <button onClick={() =>mudaCor()}>Muda Cor</button>
    </>
  )
}

