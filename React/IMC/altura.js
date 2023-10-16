import React, { useState } from 'react'

const faltura = (a, sa, props) => {
   return(
     <div>
       <label>
         Altura
         <input type="text" value = {a} onChange = {(e) => {sa(e.target.value)}} /> 
       </label>
     </div>
   )
}

export default function Altura(props) {
   const [altura, setAltura] = useState(0)
      
   return(
      <>
         {faltura(altura, setAltura)}
      </>
   )
}