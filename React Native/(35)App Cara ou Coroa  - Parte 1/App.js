import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, Image} from 'react-native';

export default function App(){

   const moedas = [
      require('./imagens/m1.png'), 
      require('./imagens/m5.png'),
      require('./imagens/m1.png'),
      require('./imagens/m2.png'),
      require('./imagens/m3.png'),
      require('./imagens/m4.png'),
      require('./imagens/m5.png'),
      require('./imagens/m6.png'),
      require('./imagens/m7.png'),
      require('./imagens/m8.png'),
   ]
   let iMoeda = 0
   const maxGiros = 20

   const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda])

   async function espera(tmp){
      function tempo(ms){
         return new Promise(resolve => setTimeout(resolve, ms))
      }
      await tempo(tmp)
   }

   async function girarMoeda(){

   }

   return (
      <SafeAreaView style = {estilos.container}>
         <Text style = {estilos.titulo}>Cara ou Coroa</Text>
         <Image source = {moedaAtual}/>
         <Button
            title = 'Girar'
            onPress = {() => {}}
         />
      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   titulo: {
      justifyContent: 'center',
      alignItems: 'center'
   }
})

