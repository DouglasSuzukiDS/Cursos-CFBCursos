import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'

export default function(){

    const [nome, setNome] = useState("Kaido")
    const mudarNome = () => {}

    return(
        <View>
            <Text>Digite seu nome: </Text>
            <TextInput
                style = {{borderWidth: 1, borderColor: '#000'}}
                value = {nome}
                onChangeText = {text => setNome(text)}
                autoCapitalize = "characters" 
                    // caracters = Letras em Maiusculo
                    // words = Só a primeira letra das palavras em maiusculo
                    // none = Valor padrão como a pessoa digitar
            />
            <Text>Valor digitado: {nome}</Text>
        </View>
    )
}