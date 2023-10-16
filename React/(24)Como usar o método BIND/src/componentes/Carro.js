import React from 'react'


export default class Carro extends React.Component{
   constructor(props){
      super(props) 
      this.modelo = 'HRV'
      this.state = {
         ligado: false,
         velAtual: 0,
      }
      this.ld = this.ligarDesligar.bind(this)
   }
   ligarDesligar(){
      //this.state.ligado = true // Aqui muda o state mas nao renderiza 
      this.setState({ligado: !this.state.ligado}) // Muda o state e renderiza

      /*this.setState(
         (state) => (
            {ligado: !state.ligado}
         )
      )*/

      this.setState(
         function (state){
            return {
               ligado: !state.ligado
            }
         }
      )
   }

   acelerar(){  // Jeito certo de usar
      this.setState(
         (state, props) => (
            {velAtual: state.velAtual + props.fator}
         )
      )
   }

   /*acelerar(){ // Pode gerar problemas
      this.setState(
         {velAtual: this.state.velAtual + this.props.fator}
      )
   }*/


   render(){
      return(
         <div>
            <h1>Meu Carro</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
            <p>Vel. Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>
               {this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}
            </button>
            <button onClick={() => this.acelerar()}>
               Acelerar
            </button>
         </div>
      )
   }
}
