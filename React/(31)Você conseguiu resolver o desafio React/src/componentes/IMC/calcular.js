import React, { useState } from 'react'

import Peso from './peso'
import Altura from './altura'
import Resultado from './resultado'

const fcalcular = (p, a, sr) => {

  const calc = () => {
    sr(p / (a * a))
  }
  return(
    <div>
      <button onClick = {calc}>Calcular</button>
    </div>
  )
}

export default function Calcular(props) {
   return(
      <>
         {fcalcular(props.peso, props.altura, props.setResultado)}
      </>
   )

}