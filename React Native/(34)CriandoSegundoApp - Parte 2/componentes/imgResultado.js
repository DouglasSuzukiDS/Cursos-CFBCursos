import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default props => {
   return(
      <View style = {estilos.bloco}>
         {
            props.comb == '' ?
               <Image
                  source = {require('../assets/bomba.png')}
                  style = {estilos.bomba}
               />
            :
               props.comb == 'G' ?
                  <Image
                     source = {require('../assets/bombaG.png')}
                     style = {estilos.bomba}
                  />
               :
                  <Image
                     source = {require('../assets/bombaE.png')}
                     style = {estilos.bomba}
                  />
         }
         
      </View>
   )
}

const estilos = StyleSheet.create({
   bloco: {
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
   },

   bomba: {
      resizeMode: 'stretch'
   }
})