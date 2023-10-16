import React from 'react';
import {View} from 'react-native';

export default function(props){ //Propriedas que estao entrando
    return(
        <View style={{width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}/*
            alignItems: Alinhamento vertical, eixo transversal, cross axis 
            justifyContent: Alinhamento horizontal, eixo principal, main axis
            flexWrap: Compotamento caso o elemento não tiver caber na direção que foi inserido;
                wrap: Quebra a direção;
                no-wrap: Não quebra a direção;
                wrap-reverse: Quebra a direção ao contrário;
            flexGrow: NUM: Tamanho do elemento, flex item sempre se ajustando ao tamanho do container em relação aos outros flex item;
            */>          
            <View style={{flexGrow:1, backgroundColor: "#00F"}}></View>

            <View style={{flexGrow:1, backgroundColor: "#00A"}}></View>

            <View style={{flexGrow:1, backgroundColor: "#005"}}></View>

            <View style={{flexGrow:1, backgroundColor: "#F00"}}></View>

            <View style={{flexGrow:1, backgroundColor: "#A00"}}></View>

            <View style={{flexGrow:1, backgroundColor: "#500"}}></View>
        </View>
    )
}