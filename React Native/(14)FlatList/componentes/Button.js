import React from 'react-native'
import {Button} from 'react-native'

const msg = () => {
    Alert.alert('MSG', 'Curso de React Native')
}
/*function msg(){
    Alert.alert('MSG', 'Curso de React Native')
}*/

<Button
    title = 'Mostrar Mensagem'
    //onPress = {() => Alert.alert('MSG', 'Curso de React Native')}
    onPress = {msg}
/>