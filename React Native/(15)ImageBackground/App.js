//import React, { Component } from 'react'
import React from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import Lp from './componentes/ListaPlana'
import Estilos from './estilos/Estilos.js';

const imgbg1 = './assets/imagens/bg1.jpg'
const imgbg2 = './assets/imagens/bg2.jpg'
const imgbg3 = './assets/imagens/bg3.jpg'

export default function App1() {
    return ( 
    <View style={Estilos.conteiner}>
        <ImageBackground
            source = {require(imgbg1)}
            style = {estilos.imagemFundo}
        >
            <View>
                <Text>CFB Cursos</Text>
                <Text>Curso de React Native</Text>
                {/* <Lp/> */}
            </View>
        </ImageBackground>
    </View>
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



