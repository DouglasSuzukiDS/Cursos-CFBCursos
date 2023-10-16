// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage'
import AS_Cursos from '@react-native-community/async-storage'

export default function App1(){

   const [curso, setCurso] = useState(null)

   const Armazenar = (chave, valor) => {
      //AsyncStorage.setItem(chave, valor) // Faz o armazenamento do item
      AS_Cursos.setItem(chave, valor)
   }

   const Buscar = async (chave) => {
      //const valor = await AsyncStorage.getItem(chave) // Busca o valor do item
      const valor = await AS_Cursos.getItem(chave) // Busca o valor do item
      setCurso(valor)
   }

   Armazenar('01', 'React Native')
   Armazenar('02', 'Javascript')
   Armazenar('03', 'C++')
   Armazenar('04', 'HTML + CSS')

   /*AS_Cursos.
      clear() => Limpa o armazenamento
      removeItem(CHAVE) => Remove a chave
   */

   Buscar('04')

   return(
      <View>
         <Text>Armazenamento Local / Async-Storage</Text>
         <Text>Curso de {curso}</Text>
      </View>
   )
}

const estilos = StyleSheet.create({

})


