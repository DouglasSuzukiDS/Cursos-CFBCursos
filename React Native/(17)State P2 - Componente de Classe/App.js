//import React, { Component } from 'react'
import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Estilos from './estilos/Estilos.js';
import CarroC from './componentes/CarroC'
import CarroF from './componentes/CarroF'

export default function App1() {

    return ( 
    <View style={Estilos.conteiner}>
 
        <Text>CFB Cursos</Text>
        <Text>Curso de React Native</Text>
        <CarroC nome = "Golf"/>
        <CarroC nome = "HRV"/>
        <CarroF nome = "Polo"/>
        <CarroF nome = "Fit"/>
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



