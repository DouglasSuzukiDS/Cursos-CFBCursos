interface TabelaIMCProps {
   imc: number
}

export default function TabelaIMC({ imc }: TabelaIMCProps) {
   return(
      <div className="mx-2 mb-2">
         <div className='flex'>
            <div className="w-1/2 border p-1 text-center font-bold">Classificação</div>
            <div className="w-1/2 border p-1 text-center font-bold">IMC</div>
         </div>

         <div className={` flex ${ imc < 18.5 ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Abaixo do Peso</div>
            <div className="w-1/2 border p-1">Abaixo de e 18.5</div>
         </div>

         <div className={` flex ${ imc >= 18.5 && imc <= 24.9 ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Peso Normal</div>
            <div className="w-1/2 border p-1">Entre 18.5 e 24.9</div>
         </div>

         <div className={` flex ${ imc >= 25 && imc <= 29.9 ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Sobrepeso</div>
            <div className="w-1/2 border p-1">Entre 25 e 29.9</div>
         </div>

         <div className={` flex ${ imc >= 30 && imc <= 34.9 ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Obesidade Grau I</div>
            <div className="w-1/2 border p-1">Entre 30 e 34.9</div>
         </div>

         <div className={` flex ${ imc >= 35 && imc <= 39.9  ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Obesidade Grau II</div>
            <div className="w-1/2 border p-1">Entre 35 e 39.9</div>
         </div>

         <div className={` flex ${ imc >= 40 ? 'destaque' : '' } `}>
            <div className="w-1/2 border p-1">Obesidade Grau III</div>
            <div className="w-1/2 border p-1">Maior que 40</div>
         </div>
      </div>
   )
}