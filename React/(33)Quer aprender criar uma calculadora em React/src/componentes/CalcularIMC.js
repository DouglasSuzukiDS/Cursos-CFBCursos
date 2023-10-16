import React from 'react'

export default class CalcularIMC extends React.Component{

   constructor(){
      super()
      this.calc = this.fcalc.bind(this) 

      // O método bind retorna uma nova função, que retorna uma chamada a sua função original forçando esse this, ou seja, fazendo com que a função original reconheça quem for que seja o argumento this como quem a chamou, consequentemente quem é o seu contexto de chamada.
   }

   fcalc = () => {
      const r = (this.props.p / (this.props.a * this.props.a))
      this.props.sr(r)
      console.log(r)
   }
   
   render(){
      return(
         <div>
            <button onClick = {this.calc} >Calcular</button>
         </div>
      )
   }
}