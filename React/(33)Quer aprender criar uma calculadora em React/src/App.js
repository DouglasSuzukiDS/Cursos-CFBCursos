import React, { useState } from 'react'

export default function App(){

  const [valorTela, setValorTela] = useState('')
  const [resultados, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  // Componentes
  const Tela = (valor, res) => {
    return(
      <div style = {cssTela}>
        <span style = {cssOper}>{valor}</span>  
        <span style = {cssTelaRes}>{res}</span>  
      </div>
    )
  }

  const Btn = (label, onClick) => {
    return(
      <button style = {cssBtn} onClick = {onClick}>{label}</button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if((d == '+' || d == '-' || d == '*' || d == '/') && operado){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultados + d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }
  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  // Estilos
  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'coloumn',
    window: 260,
    width: 260
  }

  const cssOper = {
    fontSize: 25,
    color: 'FFF',
    height: 20,
  }

  const cssTelaRes = {
    fontSize: 50,
    color: 'FFF',
  }

  const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#FFF',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  

  return(
    <>
      
    </>
  )

}


