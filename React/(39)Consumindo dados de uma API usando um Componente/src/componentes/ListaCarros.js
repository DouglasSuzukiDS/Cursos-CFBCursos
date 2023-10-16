import React from 'react'
import axios from 'axios';

export default class ListaCarros extends React.Component {
  
  state = {
    carros: []
  }

  componentDidMount() {
    axios.get('https://cfbcursosapireactexemplo1.kakashisuzuki.repl.co')
      .then( res => {
        const dadosCarros = res.data
        console.log(dadosCarros)
        this.setState({carros: dadosCarros})
      })
  } 

  
  render(){

    return(
      <>
        { this.state.carros.map(
          carro => <div key={carro.id}>
            { carro.id } - { carro.marca } - { carro.modelo }
          </div>) 
        }
      </>
    )
  }

}