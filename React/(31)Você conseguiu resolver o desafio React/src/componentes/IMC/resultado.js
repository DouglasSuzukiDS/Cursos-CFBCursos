import React, { useState } from 'react'

import Calcular from './calcular'

const fresultado = (r) => {
   return (
     <div>
       <p>Resultado: {r.toFixed(2)}</p>
     </div>
   )
}

export default function Resultado(props){
   const [resultado, setResultado] = useState(0)

   return(
      <>
         {fresultado(resultado)}
      </>
   )

}
