import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Estilos from '../estilos/Estilos.js';

let nt;

export default function(props){ //Propriedas que estao entrando
    nt = props.nota //Captura o valor do atributo
    return(
    <Text style={Estilos.textoCursos}>CFB Cursos - Curso de {props.curso}: Nota = {nt}</Text>
    )
}