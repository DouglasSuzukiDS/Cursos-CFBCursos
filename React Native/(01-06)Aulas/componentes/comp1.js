import React from 'react';
import {StyleSheet, Text} from 'react-native';

let nt;
let cor;

export default function(props){ //Propriedas que estao entrando
    nt = props.nota //Captura o valor do atributo
    cor = props.cor
    return(
    <Text style={estilos.txt2,{color: cor}}>CFB Cursos - Curso de {props.curso}: Nota = {nt}</Text>
    )
}

const estilos = StyleSheet.create({ //Aqui se cria a classe
    txt1: {
        //color: '#F00',
        fontSize: 20,
    },

    txt2: {
       //color: '#00F',

        fontSize: 15,
    }
});