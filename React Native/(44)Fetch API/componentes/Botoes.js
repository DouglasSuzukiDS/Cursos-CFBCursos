import React from 'react'
import { Alert, Button } from 'react-native'

export default function(){
   return(
      <Button
         title="Mostrar mensagem"
         onPress={() => Alert.alert('Curso de React Native')}
      />
   )
}