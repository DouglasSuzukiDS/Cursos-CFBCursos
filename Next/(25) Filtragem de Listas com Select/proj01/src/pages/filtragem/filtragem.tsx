import { Topo } from "@/components/Topo";
import { useState } from "react";

export default function Filtragem() {
   const [categ, setCateg] = useState('')
   const [linhas, setLinhas] = useState<any[]>([])

   const carros = [
      { id: 0, categ: 'Esporte', valor: '120000.00', modelo: 'Golf GTI' },
      { id: 1, categ: 'Esporte', valor: '200000.00', modelo: 'Camaro' },
      { id: 2, categ: 'SUV', valor: '100000.00', modelo: 'HRV' },
      { id: 3, categ: 'SUV', valor: '100000.00', modelo: 'T-Cross' },
      { id: 4, categ: 'Utilitario', valor: '180000.00', modelo: 'Hilux' },
      { id: 5, categ: 'Utilitario', valor: '160000.00', modelo: 'Ranger' },
   ]

   function criarLinhas(cat: any) {
      setCateg(cat)

      let linha: any[] = []

      carros.forEach((c: any) => {
         if(c.categ == cat) {
            linha.push(
               <div key={ c.id } className="flex flex-row w-[500px]">
                  <div className="w-full">{ c.categ }</div>
                  <div className="w-full">{ c.valor }</div>
                  <div className="w-full">{ c.modelo }</div>
               </div>
            )
         }
      })

      setLinhas(linha)
   }

   return(
      <div>
         <Topo />

         <label>Selecione a categoria</label>

         <select value={ categ } onChange={(evt) => criarLinhas(evt.target.value)}>
            <option value="">Nenhum</option>
            <option value="Esporte">Esporte</option>
            <option value="SUV">SUV</option>
            <option value="Utilitario">Utilitario</option>
         </select>

         <div className="flex flex-col">
            <div className="flex flex-row w-[500px]">
               <div className="w-full">Categoria</div>
               <div className="w-full">Valor</div>
               <div className="w-full">Modelo</div>
            </div>

            { linhas }
         </div>
      </div>
   )
}