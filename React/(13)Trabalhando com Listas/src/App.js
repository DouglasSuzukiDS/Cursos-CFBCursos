import React from 'react'

export default function App(){

  /*const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo']

  const listaCarros = carros.map(
    (c, i) => 
      <li key={i}>{i} - {c}</li>
  )*/

  const carros = [
    {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
    {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
    {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
    {categoria: "SUV", preco: "93000.00", modelo: "T-Cross"},
    {categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
    {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"},
  ]
  
  const listaCarros = carros.map(
    (c, i) => 
      <li key={i}>{i} - {c.categoria} - {c.modelo} - R${c.preco}</li>
  )

  return(
    <>
      <ul>{listaCarros}</ul>
    </>
  )
}

