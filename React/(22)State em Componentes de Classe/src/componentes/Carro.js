import React from 'react'


export default class Carro extends React.Component{
   constructor(props){
      super(props) 
      this.modelo = 'HRV'
      this.state = {
         ligado: false,
         velAtual: 0,
      }
   }
   ligarDesligar(){
      //this.state.ligado = true // Aqui muda o state mas nao renderiza 
      this.setState({ligado: !this.state.ligado}) // Muda o state e renderiza
   }

   render(){
      return(
         <div>
            <h1>Meu Carro</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
            <p>Vel. Atual: {this.state.velAtual}</p>
            <button onClick={() => this.ligarDesligar()}>
               {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
            </button>
         </div>
      )
   }
}
