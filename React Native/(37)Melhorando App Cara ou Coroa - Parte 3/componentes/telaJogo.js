import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableHighlight, Image } from 'react-native'
import Globais from './globais'

export default function App(){

   const moedas = [
      require('../imagens/m1.png'), 
      require('../imagens/m5.png'),
      require('../imagens/m1.png'),
      require('../imagens/m2.png'),
      require('../imagens/m3.png'),
      require('../imagens/m4.png'),
      require('../imagens/m5.png'),
      require('../imagens/m6.png'),
      require('../imagens/m7.png'),
      require('../imagens/m8.png'),
   ]
   let iMoeda = 0

   const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda])
   let maxGiros = Globais.qtdeGiros
   let tempoGiro = Globais.tempEspera

   async function espera(tmp){
      function tempo(ms){
         return new Promise(resolve => setTimeout(resolve, ms))
      }
      await tempo(tmp)
   }

   async function girarMoeda(){
      maxGiros = Globais.qtdeGiros
      tempoGiro = Globais.tempEspera
      iMoeda = 2
      for(let i = 0; i < (maxGiros * 8); i++){
         iMoeda++
         if(iMoeda > 9){
            iMoeda = 2
         }
         setMoedaAtual(moedas[iMoeda])
         await espera(tempoGiro)
      }
      let res = Math.floor(Math.random() * 10) + 1
      if(res <= 5)
         res = 0
      else
         res = 1
      setMoedaAtual(moedas[res])   
   }

   return (
      <SafeAreaView style = {estilos.container}>
         <Text style = {estilos.titulo}>{Globais.titulo}</Text>
         <Image source = {moedaAtual}/>

         <TouchableHighlight
            style = {estilos.btnGirar}
            onPress = {() => {girarMoeda()}}
         >
            <Text style = {estilos.txtBtn}>Girar</Text>
         </TouchableHighlight>

      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      padding: 20
   },

   titulo: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      fontSize: 30,
      color: '#FC0',
      textTransform: 'uppercase'
   },

   btnGirar: {
      margin: 20,
      backgroundColor: '#FC0',
      padding: 15,
      width: '100%',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
   },

   txtBtn: {
      color: '#000',
      textTransform: 'uppercase',
      fontSize: 20
   }
})