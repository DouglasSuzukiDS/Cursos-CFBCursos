import CampForm from "@/components/CampForm"
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
      <div className="flex flex-col border border-black w-[350px] gap-5">
         <p className="w-full text-center bg-zinc-400 font-bold text-lg">Calculo do IMC</p>

         <CampForm label="Peso" state={ peso } funcState={ setPeso } />
         <CampForm label="Altura" state={ altura } funcState={ setAltura }  />

         <button 
            className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer"
            onClick={ calcular }>Calcular</button>

         <p className="bg-zinc-100 p-1">Resultado: { imc.toFixed(2) }</p>

         <TabelaIMC imc={ imc } />
      </div>
   )
}