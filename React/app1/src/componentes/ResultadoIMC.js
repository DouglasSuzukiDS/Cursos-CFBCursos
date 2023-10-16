import React from 'react'

export default class resuldado extends React.Component{
   constructor(){
      super()
   }

   render(){
      return(
         <div>
            <p>Resultado: {this.props.r.toFixed(2)}</p> 
         </div>
      )
   }
}