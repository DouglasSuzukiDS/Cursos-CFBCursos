import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Gasolina from './componentes/gasolina'
import Etanol from './componentes/etanol'
import BtnCalcular from './componentes/btnCalcular'
import Resultado from './componentes/resultado'
import ImgResultado from './componentes/imgResultado'

export default function App(){
   return(
      <SafeAreaView style = {estilos.principal}>
         <Gasolina/>

         <Etanol/>

         <BtnCalcular/>

         <Resultado/>

         <ImgResultado/>

      </SafeAreaView>
   )
}

const estilos = StyleSheet.create({
   principal: {
      padding: 10
   }
});