import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default props => {
   return(
      <View style = {estilos.bloco}>
         <Text>Resultado: {props.resultado}</Text>
      </View>
   )
}

const estilos = StyleSheet.create({
   bloco: {
      marginBottom: 20,
      width: '100%'
   },
})