//import React, { Component } from 'react'
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Estilos from './estilos/Estilos.js';

export default function App1() {

    const [cor, setCor] = useState("black")

    const mudaCor = (c) => {setCor(c)}

    return ( 
    <SafeAreaView style={Estilos.conteiner}>
        <StatusBar 
            backgroundColor = {cor}
            barStyle = "default" 
            hidden = {false}
            // animated = {true}
            // translucent = {true}
        />
        <Text>CFB Cursos</Text>
        <Text>Curso de React Native</Text>
        
        <Button
            title = "Vermelho"
            // onPress = {() => setCor('red')}
            onPress = {() => mudaCor("red")}
        />
        <Button
            title = "Azul"
            // onPress = {() => setCor('blue')}
            onPress = {() => mudaCor("blue")}
        />
        <Button
            title = "Verde"
            // onPress = {() => setCor('green')}
            onPress = {() => mudaCor("green")}
        />  
    </SafeAreaView>
    ); 
};

const estilos = StyleSheet.create({
    logo: {
        width: 250,
        resizeMode: 'contain'
    },
    imagemFundo: {
        flex: 1,
        resizeMode: "cover",
        width: "100%"
    }
})

/*export default class App1 extends Component{
    render(){
        return(
            <View>
                <View>
                    <Text>CFB Cursos</Text>
                    <Text>Curso de React-Native</Text>
                </View>

                <View>
                    <Text>Aula 03</Text>
                    <Text>www.cfbcursos.com.br</Text>
                </View>
            </View>

            
        );
    }
}*/



