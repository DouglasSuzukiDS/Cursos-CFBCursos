// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Rede from './componentes/Fetch'

export default function App1(){

   return(
      <View>
         <Text>CFB Cursos</Text>
        <Rede />
      </View>
   )
}

const estilos = StyleSheet.create({

})


