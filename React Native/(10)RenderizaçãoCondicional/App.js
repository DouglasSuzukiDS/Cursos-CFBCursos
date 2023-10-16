//import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos.js';

/*const fexibir = (vp1) => {
    if(vp1){
        return(<Text>Curso de React Native</Text>)
    }else{
        return(<Text> - - - </Text>)
    }
}*/ 

export default function App1() {
    let vexibir = true;
    return ( 
    <View style={Estilos.conteiner}>
        <Caixas exibir={vexibir}/>
        <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
        <Text style={Estilos.textoTitulo}>youtube.com/cfbcursos</Text> 
        {/* {fexibir(true)} */}
        {vexibir?<Text>Curso de React Native</Text>:<Text> - - - </Text>}
        {vexibir && <Text>Curso de React Native</Text>/* Se o 1º Operador for TRUE, ele testa o 2º, se o 1º Operador for FALSE, nem passa para o segundo*/}
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



