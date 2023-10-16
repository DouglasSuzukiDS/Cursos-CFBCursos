import React, { useState } from 'react'

const fpeso = (p, sp, props) => {
   return(
     <div>
       <label>
         Peso
          <input type="text" value = {p} onChange = {(e) => {sp(e.target.value)}} /> 
       </label>
     </div>
   )
}

export default function Peso(props){
   const [peso, setPeso] = useState(0)

   return(
      <>
         {fpeso(peso, setPeso)}
      </>
   )
}