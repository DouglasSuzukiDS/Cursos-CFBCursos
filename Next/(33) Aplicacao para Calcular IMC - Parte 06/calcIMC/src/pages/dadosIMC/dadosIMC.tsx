import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function DadosIMC() {
   const [nome, setNome] = useState('')
   const [peso, setPeso] = useState('')
   const [altura, setAltura] = useState('')
   const [imc, setIMC] = useState('')
   const [data, setData] = useState('')

   const router = useRouter()

   const { p_peso, p_altura, p_imc } = router.query 

   // console.log(p_peso, p_altura, p_imc)

   useEffect(() => {
      setPeso(p_peso as string)
      setAltura(p_altura as string)
      setIMC(p_imc as string)
      setData('2023-12-22')
   
   }, [])

   return(
      <div>
         <div>
            <div>
               <label>Nome</label>
               <input 
                  type="text" 
                  value={ nome } 
                  onChange={ (evt) => setNome(evt.target.value) }/>
            </div>

            <div>
               <label>Peso</label>
               <input type="text" value={ peso } readOnly />
            </div>

            <div>
               <label>Altura</label>
               <input type="text" value={ altura } readOnly />
            </div>

            <div>
               <label>IMC</label>
               <input type="text" value={ imc } readOnly />
            </div>

            <div>
               <label>Data</label>
               <input type="text" value={ data } readOnly />
            </div>

            <div>
               <button>Gravar</button>
            </div>
         </div>

         <div>
            GRID
         </div>
      </div>
   )
}