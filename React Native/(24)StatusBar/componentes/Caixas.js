import React from 'react';
import {View} from 'react-native';

export default function(props){ //Propriedas que estao entrando
    return(
        <View style={{width: '100%', height: 300, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}> 
            {
                props.exibir ?
                    <View style={{flex:1}}>
                        <View style={{flexGrow:1, backgroundColor: "#00F"}}></View>

                        <View style={{flexGrow:1, backgroundColor: "#00A"}}></View>

                        <View style={{flexGrow:1, backgroundColor: "#005"}}></View>
                    </View>
                :
                    <View style={{flex:1}}>
                        <View style={{flexGrow:1, backgroundColor: "#F00"}}></View>

                        <View style={{flexGrow:1, backgroundColor: "#A00"}}></View>

                        <View style={{flexGrow:1, backgroundColor: "#500"}}></View>
                    </View>
                    
            }      
            
        </View>
    )
}