interface CampFormProps {
   label: string
   state: any
   funcState: any
}

export default function CampForm({ label, state, funcState }: CampFormProps) {
   return(
      <div className="flex justify-center items-center mx-2">
         <label className="w-[60px]">{ label }</label>

         <input 
            type="text"
            className="border p-1 w-full rounded-lg"
            value={ state }
            onChange={ (evt) => funcState(evt.target.value) } />
      </div>
   )
}