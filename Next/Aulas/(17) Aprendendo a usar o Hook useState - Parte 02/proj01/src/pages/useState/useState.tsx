import DisplayState from '@/components/DisplayState'
import { useState } from 'react'

export default function hookUseState() {
   const [cont, setCont] = useState<number>(0)

   function adicionar() {
      // setCont(cont => cont + 1);
      let c = cont
      c++
      setCont(c)
   }

   function subtrair() {
      // setCont(cont => cont + 1);
      let c = cont
      c--
      setCont(c)
   }
     

   return(
      <div>
         <div>useState</div>
         <DisplayState valor={ cont } />

         <div className='flex gap-5'>
            <button className='btnPadrao' onClick={ adicionar }>Adicionar</button>
            <button className='btnPadrao' onClick={ subtrair }>Subrair</button>
         </div>
      </div>
   )
}