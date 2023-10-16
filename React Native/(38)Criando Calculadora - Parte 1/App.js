import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';

export default function App(){

   const [valor1, setValor1] = useState(10)
   const [valor2, setValor2] = useState(5)
   const [resultado, setResultado] = useState(0)

   const soma = () => {
      setResultado(Number(valor1 + valor2))
   }

   return(
      <SafeAreaView style = {estilos.conteiner}>
         <Text>Calculadora - CFB Cursos </Text>

         <TextInput
            style = {estilos.display}
            value = {String(valor1)}
            onChangeText = {(texto) => {setValor1}}
         ></TextInput> 

         <TextInput
            style = {estilos.display}
            value = {String(valor2)}
            onChangeText = {(texto) => {setValor2}}
         ></TextInput> 

         <TextInput
            style = {estilos.display}
            value = {String(resultado)}
            onChangeText = {(texto) => {resultado}}
         ></TextInput> 

         <TouchableHighlight
            style = {estilos.btn}
            onPress = {() => soma()}
         ><Text>SOMAR</Text></TouchableHighlight>

      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   conteiner:{
      padding: 10
   },
   display: {
      borderWidth: 1,
      borderRadius: 10,
      padding: 10
   },
   btn: {
      backgroundColor: '#AAA',
      padding: 20
   },
   btnText: {

   }
})

