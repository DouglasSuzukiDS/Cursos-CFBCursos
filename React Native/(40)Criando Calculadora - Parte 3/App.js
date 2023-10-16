import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import Display from './componentes/display'
import Btn from './componentes/botao'

export default function App(){

   const [operacao, setOperacao] = useState(0)
   const [resultado, setResultado] = useState(0)

   const operar = () => {
      setResultado(eval(operacao))
   }

   return(
      <SafeAreaView style = {estilos.conteiner}>
         <Text>Calculadora - CFB Cursos </Text>
         <Display valor = {0} res = {0}/>

         <View style = {estilos.botoes}>
            <Btn label = "AC"  ac aoClicar = {() =>{}} />
            <Btn label = "("   aoClicar = {() =>{}} />
            <Btn label = ")"   aoClicar = {() =>{}} />
            <Btn label = "/"  operacao aoClicar = {() =>{}} /> 

            <Btn label = "7"  aoClicar = {() =>{}} />
            <Btn label = "8"  aoClicar = {() =>{}} />
            <Btn label = "9"  aoClicar = {() =>{}} />
            <Btn label = "*"  operacao aoClicar = {() =>{}} /> 

            <Btn label = "4"  aoClicar = {() =>{}} />
            <Btn label = "5"  aoClicar = {() =>{}} />
            <Btn label = "6"  aoClicar = {() =>{}} />
            <Btn label = "-"  operacao aoClicar = {() =>{}} />

            <Btn label = "1"  aoClicar = {() =>{}} />
            <Btn label = "2"  aoClicar = {() =>{}} />
            <Btn label = "3"  aoClicar = {() =>{}} />
            <Btn label = "+"  operacao aoClicar = {() =>{}} />

            <Btn label = "0"  aoClicar = {() =>{}} />
            <Btn label = "."  aoClicar = {() =>{}} />
            <Btn label = "<-" bs aoClicar = {() =>{}} />
            <Btn label = "="  igual aoClicar = {() =>{}} />

         </View>

      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   conteiner:{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   botoes: {
      flexDirection: 'row',
      flexWrap: 'wrap'
   }
})

