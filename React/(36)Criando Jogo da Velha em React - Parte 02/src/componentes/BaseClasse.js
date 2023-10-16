import React from 'react'

export default class BaseClasse extends React.Component{
   constructor(props){
      // Para permitir o uso de Props
      super(props) //Chama a SuperClass que esta extendendo

      // State
      this.state = {
         canal: 'CFB Cursos',
         curso: 'React',
         ativo: true,
         nome: this.props.nomeAluno
      }
      this.status = this.props.status
      // this.status = this.props.nomeAluno

      // Bindagem
      let ad = ativarDesativar.bind(this)

      // Instruções do Construtor
   }
   
   // Função para manipular State
   ativarDesativar(){
      this.setState(
         state => ({
            ativo=!state.ativo
         })
      )
   }

   componentDidMount(){ 
      console.log('O componente foi criado')
   }

   componentDidUpdate(){
      console.log('O componente foi atualizado')
   }

   componentWillUnmount(){
      console.log('O componente foi removido')
   }

   render(){
      return(
         <>
            <h1>Componente de Classe</h1>
            {/* // Chamada da função com Bind */}
            <button onClick = {this.ad}>Ativar / Desativar</button>

            {/* // Chamada da função sem o Bind */}
            <button onClick = {() => this.ativarDesativar}>Ativar / Desativar</button>
         </>
      )
   }

}
