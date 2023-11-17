interface DisplayStateProps {
   valor: number
   fAdicionar: any
   fSubtrair: any
}

export default function DisplayState(props: DisplayStateProps) {
   return(
      <div className='flex flex-col justify-center items-center p-5 rounded-md bg-zinc-300 w-[300px]'>
         <div className="flex justify-center items-center bg-zinc-700 text-green-500 w-[200px] mb-3">
            { props.valor }
         </div>

         <div className='flex gap-5'>
            <button className='btnPadrao' onClick={ props.fAdicionar }>Adicionar</button>
            <button className='btnPadrao' onClick={ props.fSubtrair }>Subrair</button>
         </div>
      </div>
   )
}