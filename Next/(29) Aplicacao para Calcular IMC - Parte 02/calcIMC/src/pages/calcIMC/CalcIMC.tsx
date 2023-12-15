import CompForm from "@/components/CompForm"
import TabelaIMC from "@/components/TabelaIMC"
import { useState } from "react"

export default function CalcIMC() {
   const [peso, setPeso] = useState<number>(0)
   const [altura, setAltura] = useState<number>(0)
   const [imc, setIMC] = useState<number>(0)

   function calcular() {
      let res = peso / ( altura * altura )
      setIMC(res)
   }

   return(
      <div>
         <p>Calculo do IMC</p>

         <CompForm label="Peso" state={ peso } funcState={ setPeso } />
         <CompForm label="Altura" state={ altura } funcState={ setAltura }  />

         <button onClick={ calcular }>Calcular</button>

         <p>Resultado: { imc }</p>

         <TabelaIMC />
      </div>
   )
}