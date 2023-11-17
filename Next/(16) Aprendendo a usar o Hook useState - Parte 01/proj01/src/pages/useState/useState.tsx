import { useState } from 'react'

export default function hookUseState() {
   const [cont, setCont] = useState<number>(0)

   function contador() {
      setCont(cont => cont + 1);
   }

   return(
      <div>
         <div>useState</div>
         <div>{ cont }</div>
         <button onClick={ contador }>Add</button>
      </div>
   )
}