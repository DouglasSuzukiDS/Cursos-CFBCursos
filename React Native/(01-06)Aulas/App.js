//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import C1 from './componentes/comp1'

export default function App1() {
    return ( 
    <View style={estilos.conteiner}>
        <C1 curso="React-Native" nota="10" cor="#FF0"/> 
        <C1 curso="C++" nota="10" cor="#F0F"/>
        <C1 curso="Javascript" nota="10" cor="#0FF"/>
        <C1 curso="C#" nota="10" cor="#000" style={estilos.txt0}/>
        <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
        <Text style={{color: '#f00', fontSize: 30}}>youtube.com/cfbcursos</Text>
    </View>

    );
};

const estilos = StyleSheet.create({

    conteiner: {
        flex: 1,
        backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'center'
    },

    txt0: {
        color: '#080',
        fontSize: 10,
    }
});

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



