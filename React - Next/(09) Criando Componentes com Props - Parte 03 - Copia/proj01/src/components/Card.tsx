interface CardProps {
   produto: string
   valor: number
   desconto: number
}

export const Card = (props: CardProps) => {
   return(
      <div className="flex flex-col border border-red-700 rounded-sm p-1">
         <div>Produto: { props.produto }</div>
         <div>Valor: RS{ props.valor }</div>
         <div>Desconto: RS{ props.desconto }</div>
         <div>Preço Venda: RS{ props.valor - props.desconto }</div>
      </div>
   )
}