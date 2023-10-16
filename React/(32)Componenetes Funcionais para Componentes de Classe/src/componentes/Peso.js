import React from 'react'

export default  class peso extends React.Component{
  // Em componentes de classe, o uso de props deve conter um constructor e o metodo super()
  constructor(){
    super()
  }

  render(){
    return(
      <div>
       <label>
         Peso
         <input type="text" value = {this.props.p} onChange = {(e) => {this.props.sp(e.target.value)}} /> 
          {/* Nas propriedades com props, se de inserir o this */}
       </label>
     </div>
    )
  }
   
}