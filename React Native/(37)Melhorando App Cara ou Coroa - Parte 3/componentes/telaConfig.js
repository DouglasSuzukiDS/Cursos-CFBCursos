import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Globais from './globais'

export default function telaConfig(){
   
   const [giros, setGiros] = useState(Globais.qtdeGiros)
   const [tempo, setTempo] = useState(Globais.tempEspera)

   const setarGiros = (v) => {
      Globais.qtdeGiros = parseInt(v)
      setGiros(v)
   }

   const setarTempo = (v) => {
      Globais.tempEspera = parseInt(v)
      setTempo(v)
   }

   return(
      <View style = {estilos.conteiner}>
         <Text style = {estilos.txt}>Quantidade de Giros:</Text>
         <TextInput
            style = {estilos.cxTexto}
            value = {String(giros)}
            onChangeText = {(valor) => {setarGiros(valor)}}
         />

         <Text style = {estilos.txt}>Velocidade do Giro:</Text>
         <TextInput
            style = {estilos.cxTexto}
            value = {String(tempo)}
            onChangeText = {(valor) => {setarTempo(valor)}}
         />
      </View>
   )
}

const estilos = StyleSheet.create({
   conteiner:{
      padding: 10
   },

   txt: {
      color: '#FFF'
   }, 

   cxTexto: {
      borderWidth: 1,
      borderColor: '#FFF',
      borderRadius: 10,
      marginBottom: 20,
      color: '#FC0'
   }
})