//import React, { Component } from 'react'
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TelaCanalE from './componentes/TelaCanal'

const Gavetas = createDrawerNavigator()

function TelaHome({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Text>CFB Cursos</Text>         
        </View>
    )
}

function TelaCanal({ navigation }){
   return(
      <TelaCanalE nav = {navigation}/>
   )
}

function TelaCursos({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela Cursos</Text>
        </View>
    )
}

export default function App1() {
    return (
        <NavigationContainer>
            <Gavetas.Navigator initialRouteName="TelaCanal" >
                <Gavetas.Screen
                    name="Home"
                    component={TelaHome}
                    options={{
                        title: 'Tela Inicial',
                        headerStyle: {
                            backgroundColor: '#008'
                        },
                        headerTintColor: '#FFF',
                        headerRight: () => (
                            <Button
                                title="Cursos"
                                color='#000'
                                onPress={() => alert('Botão Cursos clicado')}
                            />
                        )
                    }}
                />

                <Gavetas.Screen
                    name="Canal"
                    component={TelaCanal}
                    options={{
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

                <Gavetas.Screen
                    name="Cursos"
                    component={TelaCursos}
                    options={{ title: 'Cursos do Canal' }}
                />
            </Gavetas.Navigator>
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



