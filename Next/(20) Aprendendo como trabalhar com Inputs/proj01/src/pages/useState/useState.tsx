import DisplayState from '@/components/DisplayState'
import { useState } from 'react'

export default function hookUseState() {
   const [cont, setCont] = useState<number>(0)

   
     

   return(
      <div>
         <div>useState</div>
         <DisplayState 
            valor={ cont } fValor={ setCont } />
      </div>
   )
}