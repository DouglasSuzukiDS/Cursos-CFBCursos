import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput, Image } from 'react-native';
import Peso from './componentes/peso'
import Altura from './componentes/altura'
import BtnCalcular from './componentes/btnCalcular'
import Resultado from './componentes/resultado'
import Tabela from './componentes/tabela'

export default function calcimc(){

   const [peso, setPeso] = useState(0)
   const [altura, setAltura] = useState(0)
   const [resultado, setResultado] = useState(0)

   const calcImc = () => {
      if(peso == 0 || !peso){
         alert('Informe o Peso')
         return
      }

      if(altura == 0 || !altura){
         alert('Informe a altura')
         return
      }

      const r = peso / (Math.pow(altura, 2))
      setResultado(r.toFixed(1))
   }

   return(
      <SafeAreaView style = {estilos.corpo}>
         <View style = {estilos.bloco}>
            <Text>Calculadora de IMC</Text>
         </View>

         <Peso aoModificar = {setPeso} />

         <Altura aoModificar = {setAltura}/>

         <BtnCalcular aoClicar = {calcImc}/>

         <Resultado resultado = {resultado}/>

         <Tabela />

      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   corpo: {
      padding: 10,
   },
   
   bloco: {
      marginBottom: 20,
   },
});
