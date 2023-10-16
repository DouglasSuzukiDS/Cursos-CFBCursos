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

            <Button
                title = "Tela Cursos"
                onPress = {() => navigation.navigate('Cursos')}
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

function TelaCursos({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Tela Cursos</Text>

            <Button
                title = "React Native"
                onPress = {() => navigation.navigate('CursoReactNative', {
                    aulas: 150, autor: 'Bruno P. Campos'
                })}
            />             
        </View>
    )
}

function TelaCursoReactNative({route, navigation}){
    // const {aulas} = route.params
    // const {autor} = route.params
    const aulas = route.params.aulas
    const autor = route.params.autor
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Curso de React Native</Text>
            <Text>Aulas: {aulas}</Text>
            <Text>Autor: {autor}</Text>

            <Button
                title = "Home"
                onPress = {() => navigation.navigate('Home')}
            />

            <Button
                title = "Voltar para cursos"
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
                    options = {{
                        title: 'Tela Inicial',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        headerTintColor: '#FFF',
                        headerRight: () => (
                            <Button
                                title = "Cursos"
                                color = '#000'
                                onPress = {() => alert('Botão Cursos clicado')}
                            />
                        )
                    }}
                />

                <Pilha.Screen 
                    name = "Canal"
                    component = {TelaCanal}
                    options = {{
                        title: 'Tela Canal',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                            
                    }}
                />

                <Pilha.Screen 
                    name = "Cursos"
                    component = {TelaCursos}
                    options = {{title: 'Cursos do Canal'}}
                />

                <Pilha.Screen 
                    name = "CursoReactNative"
                    component = {TelaCursoReactNative}
                    options = {{title: 'Cursos de React Native'}}
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



