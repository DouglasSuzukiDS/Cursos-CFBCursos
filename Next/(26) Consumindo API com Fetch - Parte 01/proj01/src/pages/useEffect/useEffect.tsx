import Globais from "@/components/GLobais";
import { Topo } from "@/components/Topo";
import { useEffect, useState } from "react";

export default function hookUseEffect() {
   const [cont, setCont] = useState<number>(0)
   const [aux, setAux] = useState<number>(0)
   
   useEffect(() => {
      // aux++

      /*let c = cont
      c++
      setCont(c)*/

      alert('useEffect disparado')

      Globais.canal = 'CFB Drone'
      Globais.curso = 'Typescript'
      Globais.ano = '2024'
   }, [cont])


   function add() {
      let c = cont
      c++
      setCont(c)
   }

   return(
      <div>
         <Topo />

         <p>{ `Valor de cont ${ cont }` }</p>
         <p>{ `Valor de auxt ${ aux }` }</p>
         <button onClick={ add }>Adicionar</button>

         <div>
            <p>{ Globais.canal }</p>
            <p>{ Globais.curso }</p>
            <p>{ Globais.ano }</p>
         </div>
      </div>
   )
}