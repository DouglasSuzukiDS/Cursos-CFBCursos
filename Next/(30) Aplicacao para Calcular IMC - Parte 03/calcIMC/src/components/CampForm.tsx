interface CampFormProps {
   label: string
   state: any
   funcState: any
}

export default function CampForm(props: CampFormProps) {
   return(
      <div className="flex justify-center items-center mx-2">
         <label className="w-[60px]">{ props.label }</label>

         <input 
            type="text"
            className="border p-1 w-full rounded-lg"
            value={ props.state }
            onChange={ (evt) => props.funcState(evt.target.value) } />
      </div>
   )
}