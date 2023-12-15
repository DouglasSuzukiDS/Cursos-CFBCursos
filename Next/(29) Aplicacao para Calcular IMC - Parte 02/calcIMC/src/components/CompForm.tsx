interface CompFormProps {
   label: string
   state: any
   funcState: any
}

export default function CompForm(props: CompFormProps) {
   return(
      <div>
         <label>{ props.label }</label>
         <input 
            type="text"
            value={ props.state }
            onChange={ (evt) => props.funcState(evt.target.value) } />
      </div>
   )
}