import React, { useState } from 'react'
import { View, Text, TouchableHighlight } from  'react-native'
import Local from '@react-native-community/geolocation'

export default function (){

   const [lat, setLatitude] = useState(0)
   const [lon, setLongitude] = useState(0)

   const obterLocal = () => {
      Local.getCurrentPosition(  // Obtem a localização
         (pos) => {
            setLatitude(pos.coords.altitude)
            setLongitude(pos.coords.longitude)
         },
         (erro) => {
            alert('Erro: ' + erro.message)
         }, 
         {
            enableHighAccuracy: true, // Precisão na Busca
            timeout: 120000,
            maximumAge: 1000
         }
       ) 
         
   }

   return(
      <View>
         <Text>
            CFB Cursos - Geolocalização
         </Text>

         <TouchableHighlight
            onPress={obterLocal}
         >
            <Text>Clique aqui para pegar a localização</Text>
         </TouchableHighlight>

         <Text>Latitude: {lat}</Text>
         <Text>Longitude: {lon}</Text>
      </View>
   )
}