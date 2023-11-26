interface DisplayStateProps {
   valor: number,
   fValor: any
}

export default function DisplayState(props: DisplayStateProps) {

   function adicionar() {
      // setCont(cont => cont + 1);
      let c = props.valor
      c++
      props.fValor(c)
   }

   function subtrair() {
      // setCont(cont => cont + 1);
      let c = props.valor
      c--
      props.fValor(c)
   }

   function operacao(op: number) {
      let c = props.valor
      c += op
      props.fValor(c)
   }

   return(
      <div className='flex flex-col justify-center items-center p-5 rounded-md bg-zinc-300 w-[300px]'>
         <div className="flex justify-center items-center bg-zinc-700 text-green-500 w-[200px] mb-3">
            { props.valor }
         </div>

         <div className='flex gap-5'>
            {/* <button className='btnPadrao' onClick={ adicionar }>Adicionar</button>
            <button className='btnPadrao' onClick={ subtrair }>Subrair</button> */}

            <button className='btnPadrao' onClick={ () => operacao(1) }>Adicionar</button>
            <button className='btnPadrao' onClick={ () => operacao(-1) }>Subrair</button>
         </div>
      </div>
   )
}