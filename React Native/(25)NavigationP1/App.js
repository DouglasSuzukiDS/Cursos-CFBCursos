//import React, { Component } from 'react'
import React from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

function TelaHome({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
            <Text>CFB Cursos</Text>
            <Button
                title = "Tela Canal"
                onPress = {() => navigation.navigate('Canal')}
            />
        </View>
    )
}

function TelaCanal({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Canal</Text>
            <Text>youtube.com/cfbcursos</Text> 

            <Button
                title = "Home"
                onPress = {() => navigation.navigate('Home')}
            /> 

            <Button
                title = "Voltar"
                onPress = {() => navigation.goBack()}
            />             
        </View>
    )
}

export default function App1() {
    return (
        <NavigationContainer>
            <Pilha.Navigator initialRouteName = "TelaCanal" >
                <Pilha.Screen 
                    name = "Home"
                    component = {TelaHome}
                    options = {{title: 'Tela Inicial'}}
                />

                <Pilha.Screen 
                    name = "Canal"
                    component = {TelaCanal}
                    options = {{title: 'Tela Canal'}}
                />
                </Pilha.Navigator>
        </NavigationContainer>
    );

};

const estilos = StyleSheet.create({
    
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



