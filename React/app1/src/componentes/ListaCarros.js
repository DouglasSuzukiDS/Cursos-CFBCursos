import React, { useState, useEffect } from 'react'

export default function ListaCarro() {
  
  const [carros, setCarros] = useState([])

  useEffect(() => {
    fetch('https://cfbcursosapireactexemplo1.kakashisuzuki.repl.co')
      .then(res => res.json())
      .then(
        (resultado) => {
          setCarros(resultado)
        }
      )

    {/* axios.get('https://cfbcursosapireactexemplo1.kakashisuzuki.repl.co')
      .then( res => {
        const dadosCarros = res.data 
        setCarros(dadosCarros)
      }) */}
  }) 

  return(
    <div>
      { carros.map(
        carro => <div key={carro.id}>
          { carro.id } - { carro.marca } - { carro.modelo }
        </div>) 
      }
    </div>
  )

}