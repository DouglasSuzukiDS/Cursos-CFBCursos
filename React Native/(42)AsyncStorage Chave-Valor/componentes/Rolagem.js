import React, {useState} from 'react'
import {View, Text, ScrollView, RefreshControl, RefreshControlBase} from 'react-native'

export default function(){

    const [atualizando, setAtualizando] = useState(false)
    const aoAtualizar = () => {
        setAtualizando(true)

        // Código de Atualização
         
        setTimeout(() => {setAtualizando(false)}, 3000)
    }

    return (
        <View style = {{flex: 1}}>
            <ScrollView 
                style = {{backgroundColor: '#333', padding: 15}}
                refreshControl = {
                    <RefreshControl
                        refreshing = {atualizando}
                        onRefresh = {aoAtualizar}
                    />
                }

            >
                <Text style = {{color: '#EEE'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim est, malesuada vitae suscipit id, sollicitudin eu lectus. Etiam finibus, massa nec sodales laoreet, tortor augue pretium augue, congue tincidunt ipsum nulla eu arcu. Proin odio lacus, eleifend et arcu ut, dapibus laoreet tortor. Mauris non tincidunt neque. Phasellus auctor tortor nisl, et fermentum nibh tempor eget. Nulla eu malesuada turpis, nec sollicitudin magna. Fusce ut bibendum sem. Donec ac auctor enim. Ut justo eros, pulvinar vel placerat interdum, laoreet ut lorem. Maecenas ligula sem, maximus et pretium id, cursus nec neque. Nulla mattis risus ac nisl sollicitudin sollicitudin. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim est, malesuada vitae suscipit id, sollicitudin eu lectus. Etiam finibus, massa nec sodales laoreet, tortor augue pretium augue, congue tincidunt ipsum nulla eu arcu. Proin odio lacus, eleifend et arcu ut, dapibus laoreet tortor. Mauris non tincidunt neque. Phasellus auctor tortor nisl, et fermentum nibh tempor eget. Nulla eu malesuada turpis, nec sollicitudin magna. Fusce ut bibendum sem. Donec ac auctor enim. Ut justo eros, pulvinar vel placerat interdum, laoreet ut lorem. Maecenas ligula sem, maximus et pretium id, cursus nec neque. Nulla mattis risus ac nisl sollicitudin sollicitudin. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim est, malesuada vitae suscipit id, sollicitudin eu lectus. Etiam finibus, massa nec sodales laoreet, tortor augue pretium augue, congue tincidunt ipsum nulla eu arcu. Proin odio lacus, eleifend et arcu ut, dapibus laoreet tortor. Mauris non tincidunt neque. Phasellus auctor tortor nisl, et fermentum nibh tempor eget. Nulla eu malesuada turpis, nec sollicitudin magna. Fusce ut bibendum sem. Donec ac auctor enim. Ut justo eros, pulvinar vel placerat interdum, laoreet ut lorem. Maecenas ligula sem, maximus et pretium id, cursus nec neque. Nulla mattis risus ac nisl sollicitudin sollicitudin. Donec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim est, malesuada vitae suscipit id, sollicitudin eu lectus. Etiam finibus, massa nec sodales laoreet, tortor augue pretium augue, congue tincidunt ipsum nulla eu arcu. Proin odio lacus, eleifend et arcu ut, dapibus laoreet tortor. Mauris non tincidunt neque. Phasellus auctor tortor nisl, et fermentum nibh tempor eget. Nulla eu malesuada turpis, nec sollicitudin magna. Fusce ut bibendum sem. Donec ac auctor enim. Ut justo eros, pulvinar vel placerat interdum, laoreet ut lorem. Maecenas ligula sem, maximus et pretium id, cursus nec neque. Nulla mattis risus ac nisl sollicitudin sollicitudin. Donec.
                </Text>
            </ScrollView>
        </View>
    )
    
}