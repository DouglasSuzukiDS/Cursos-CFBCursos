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
            <div className="campoForm">
               <label>Nome</label>
               <input 
                  type="text" 
                  className="inputDados" 
                  value={ nome } 
                  onChange={ (evt) => setNome(evt.target.value) }/>
            </div>

            <div className="campoForm">
               <label>Peso</label>
               <input 
                  type="text" 
                  className="inputDados"
                  value={ peso } readOnly />
            </div>

            <div className="campoForm">
               <label>Altura</label>
               <input 
                  type="text" 
                  className="inputDados" 
                  value={ altura } readOnly />
            </div>

            <div className="campoForm">
               <label>IMC</label>
               <input 
                  type="text" 
                  className="inputDados" 
                  value={ imc } readOnly />
            </div>

            <div className="campoForm">
               <label>Data</label>
               <input 
                  type="text" 
                  className="inputDados" 
                  value={ data } readOnly />
            </div>

            <div>
               <button className="botaoDados">Gravar</button>
            </div>
         </div>

         <div className="grid">
            <div className="gridLinhaTitulos">
               <div className="gridTitulos">Nome</div>
               <div className="gridTitulos">Peso</div>
               <div className="gridTitulos">Altura</div>
               <div className="gridTitulos">IMC</div>
               <div className="gridTitulos">Data</div>
            </div>

            <div className="gridLinhaDados">
               <div className="gridLinhas">
                  <div className="gridLinha">Nome 1</div>
                  <div className="gridLinha">Peso 1</div>
                  <div className="gridLinha">Altura 1</div>
                  <div className="gridLinha">IMC 1</div>
                  <div className="gridLinha">Data 1</div>
               </div>
            </div>
         </div>
      </div>
   )
}