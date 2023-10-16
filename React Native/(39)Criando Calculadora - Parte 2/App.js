import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';

export default function App(){

   const [operacao, setOperacao] = useState(0)
   const [resultado, setResultado] = useState(0)

   const operar = () => {
      // setResultado(Number(valor1 + valor2))
      setResultado(eval(operacao))
   }

   return(
      <SafeAreaView style = {estilos.conteiner}>
         <Text>Calculadora - CFB Cursos </Text>

         <View style = {estilos.display}>
            <TextInput
               style = {estilos.txtDspOper}
               value = {String(operacao)}
               onChangeText = {(texto) => {setOperacao(texto)}}
            ></TextInput> 

            <TextInput
               style = {estilos.txtDspRes}
               value = {String(resultado)}
            ></TextInput> 
         </View>

         <View>
            <TouchableHighlight
               style = {estilos.btn}
               onPress = {() => operar()}
            ><Text>Operar</Text></TouchableHighlight>
         </View>


      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   conteiner:{

   },
   display:{
      backgroundColor: '#333',
      padding: 10
   },
   txtDspOper: {
      color: '#FFF'
   },
   txtDspRes: {
      color: '#FFF'
   },
   btn: {
      backgroundColor: '#AAA',
      padding: 20
   },
   btnText: {

   }
})

