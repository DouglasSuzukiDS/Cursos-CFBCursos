import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default props => {
   return(
      <View style = {estilos.bloco}>
         <Text>Melhor Combustível: {props.resultado}</Text>
      </View>
   )
}

const estilos = StyleSheet.create({
   bloco: {
      marginBottom: 10
   }
})