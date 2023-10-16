import React from 'react'


export default class Classe extends React.Component{
   constructor(props){
      super(props) 
         // Super() = Método que chama o Constructor da Classe Pai
   }

   render(){
      return(
         <div>
            <h1>Primeiro Componente de Classe</h1>
            <p>Canal: {this.props.canal}</p> {/* Faz referencia ao próprio elemento*/}
            <p>Curso: {this.props.curso}</p>
         </div>
      )
   }
}
