import React from 'react'

export default function Caixa(props){

  return(
    <>
      <p>{props.site}</p>
      {/*{props.children} {/* Retorna todos os elementos filhos do elemento */}

      {props.children}
      {props.children[0]} {/* Retorna o filho do elemento pelo indice de array */}
      {props.children[1]} 
    </>
  )

}