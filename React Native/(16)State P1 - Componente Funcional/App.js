//import React, { Component } from 'react'
import React, {useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import Estilos from './estilos/Estilos.js';

export default function App1() {

    const [ligado, setLigado] = useState(false)

    return ( 
    <View style={Estilos.conteiner}>
        <Button
            title = {ligado ? "Desligar" : "Ligar"}
            onPress = {() => setLigado(!ligado)}
        />
        { ligado ?
            <View>
                <Text>CFB Cursos</Text>
                <Text>Curso de React Native</Text>
                {/* <Lp/> */}
            </View>
            :
            <Text>* * *</Text>
        }
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



