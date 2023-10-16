//import React, { Component } from 'react'
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Lp from './componentes/ListaPlana'
import Estilos from './estilos/Estilos.js';

export default function App1() {
    return ( 
    <View style={Estilos.conteiner}>
        <Text>CFB Cursos</Text>
        <Text>Curso de React Native</Text>
        <Lp/>
    </View>
    );
};

const estilos = StyleSheet.create({
    logo: {
        width: 250,
        resizeMode: 'contain'
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



