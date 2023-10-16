import React from 'react'

export default function Relogio(){
   return(
      <p>
         {new Date().toLocaleTimeString()} {/* Retona a Data */}
      </p>
   )
}