import React, { useState } from 'react'

export default function App(){

  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
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

  const BtnOP = (label, onClick) => {
    return(
      <button style = {cssBtnOP} onClick = {onClick}>{label}</button>
    )
  }

  const BtnAC = (label, onClick) => {
    return(
      <button style = {cssBtnAC} onClick = {onClick}>{label}</button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if((d == '+' || d == '-' || d == '*' || d == '/' ) && operado){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
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

  const Operacao = (oper) => {
    if(oper == 'bs'){
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1)) // Retorna uma parte da string, começando no índice especificado e estendendo-se por um determinado número de caracteres posteriormente.
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r = eval(valorTela) // Avalia uma expressao (Faz o calculo) e retorna o elemento; 
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }
  }

  // Estilos
  const cssConteiner = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000'
  }

  const cssBotoes = {
    flexDirection: 'row',
    flexWrap: 'wap'
  }

  const cssTela = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: 260,
  }

  const cssOper = {
    fontSize: 25,
    color: '#FFF',
    height: 20,
  }

  const cssTelaRes = {
    fontSize: 50,
    color: '#FFF',
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

  const cssBtnOP = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#FF0',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  const cssBtnAC = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '#0FF',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }

  

  return(
    <>
      <div style = {cssConteiner}>
        <h3>Calculadora Matemática Simples</h3>
        {Tela(valorTela, resultado)}
        <div style = {cssBotoes}>

          {BtnAC( 'AC', limparMemoria ) }
          {BtnAC( '(', () => addDigitoTela('(') ) }
          {BtnAC( ')', () => addDigitoTela(')') ) }
          {BtnOP( '/', () => addDigitoTela(' / ') ) }

          {Btn( '7', () => addDigitoTela('7') ) }
          {Btn( '8', () => addDigitoTela('8') ) }
          {Btn( '9', () => addDigitoTela('9') ) }
          {BtnOP( '*', () => addDigitoTela('*') ) }

          {Btn( '4', () => addDigitoTela('4') ) }
          {Btn( '5', () => addDigitoTela('5') ) }
          {Btn( '6', () => addDigitoTela('6') ) }
          {BtnOP( '-', () => addDigitoTela('-') ) }

          {Btn( '1', () => addDigitoTela('1') ) }
          {Btn( '2', () => addDigitoTela('2') ) }
          {Btn( '3', () => addDigitoTela('3') ) }
          {BtnOP( '+', () => addDigitoTela('+') ) }

          {Btn( '0', () => addDigitoTela('0') ) }
          {Btn( '.', () => addDigitoTela('.') ) }
          {BtnAC( '<-', () => Operacao('bs') ) }
          {BtnAC( '=', () => Operacao('=') ) }

        </div>
      </div>
    </>
  )

}


