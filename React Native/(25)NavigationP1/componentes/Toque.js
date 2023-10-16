import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedbackPropsIOS, TouchableWithoutFeedback} from 'react-native'

export default function(){

    const [cont, setCont] = useState(0)

    const contar = () => {
        setCont(cont + 1)
    }

    return(
        <View>
            {/* TouchableHighLight: Funciona ficando escuro quando clicado;
                TouchableOpacity: Clareia o elemento quando clicado;
                TouchableWithoutFeedback: Não acontece nada quando é clicado;
            */}
            <TouchableHighlight
                style = {estilos.botao}
                onPress = {contar}
                underlayColor = "#0080"
            >  
                <Text>CFB Cursos</Text>
            </TouchableHighlight>

            <TouchableOpacity
                style = {estilos.botao}
                onPress = {contar}
                underlayColor = "#0080"
            >  
                <Text>CFB Cursos</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
                style = {estilos.botao}
                onPress = {contar}
                underlayColor = "#0080"
            >  
                <Text>CFB Cursos</Text>
            </TouchableWithoutFeedback>

            <Text>{cont}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    botao: {
        alignItems: "center",
        backgroundColor: "#CCC",
        padding: 10
    }
})