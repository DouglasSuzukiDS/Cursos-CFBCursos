import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default props => {
   return(
      <View style = {estilos.bloco}>
         
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