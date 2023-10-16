//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos.js';

export default function App1() {
    return ( 
    <View style={Estilos.conteiner}>
        <Caixas/>
        <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
        <Text style={Estilos.textoTitulo}>youtube.com/cfbcursos</Text> 
    </View>

    );
};


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



