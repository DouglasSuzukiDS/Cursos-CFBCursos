//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text, Image, Button, Alert} from 'react-native';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos.js';

const msg = () => {
    Alert.alert('MSG', 'Curso de React Native')
}
/*function msg(){
    Alert.alert('MSG', 'Curso de React Native')
}*/

export default function App1() {
    let vexibir = true;
    return ( 
    <View style={Estilos.conteiner}>
        <Button
            title = 'Mostrar Mensagem'
            //onPress = {() => Alert.alert('MSG', 'Curso de React Native')}
            onPress = {msg}
        />
        <Image
            source={require('./assets/logoCanal.png')}
            style = {estilos.logo}
        />
        <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
        <Text style={Estilos.textoTitulo}>youtube.com/cfbcursos</Text> 
        {/* {fexibir(true)} */}
        {vexibir?<Text>Curso de React Native</Text>:<Text> - - - </Text>}
        {vexibir && <Text>Curso de React Native</Text>/* Se o 1º Operador for TRUE, ele testa o 2º, se o 1º Operador for FALSE, nem passa para o segundo*/}
    </View>

    );
};

const estilos = StyleSheet.create({
    logo: {
        width: 250,
        resizeMode: 'contain' //Ajusta para o tamanho escolhido
        /*  contain: Redimensiona no container;
            cover: Padrão;
            stretch: Estica;
            center: Centraliza;
            repeat: Repete;
        */

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



