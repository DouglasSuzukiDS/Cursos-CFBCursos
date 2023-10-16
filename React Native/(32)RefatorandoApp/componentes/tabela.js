import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function tabela() {
   return(
      <View style = {estilos.bloco}>
         <Image
            source = {require('../assets/tabela.png')}
            style = {estilos.tabela}
      />
      </View>
   )
}

const estilos = StyleSheet.create({
   
   bloco: {
      marginBottom: 20,
      width: '100%'
   },

   tabela: {
      width: '100%',
      resizeMode: 'contain',
      marginTop: -87
   }
});