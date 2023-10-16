import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default props => {
   return(
      <View style = {estilos.bloco}>
         <Text>Digite o preço da Gasolina</Text>
         <TextInput
            style = {estilos.txt}
            keyboardType = 'numeric'
         />
      </View>
   )
}

const estilos = StyleSheet.create({
   bloco: {
      marginBottom: 10
   },

   txt: {
      borderBottomColor: '#000',
      borderWidth: 2,
      borderRadius: 7,
   }
})