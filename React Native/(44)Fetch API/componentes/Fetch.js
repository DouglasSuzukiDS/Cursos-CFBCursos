import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

export default function(){
   // FETCH = Permite carregar dados de uma URL remota

   const [carregando, setCarregando] = useState(true)
   const [dados, setDados] = useState([])

   useEffect( // useEffect = Diz para o componente fazer uma função depois de ser renderizado
      () => {
         fetch('http://cfbcursos.com.br/filmes.json')
            .then((resp) => resp.json())
            .then((json) => setDados(json.filmes))
            .catch(() => (alert('Erro ao carregar lista de filmes')))
            .finally(() => setCarregando(false))
      }, [] 
   )

   return(
      <View>
         {
            carregando ? <ActivityIndicator /> : (
               <FlatList
                  data={dados}
                  keyExtractor={({id}, index) => id}
                  renderItem={({item}) => (
                     <Text>{item.titulo}, {item.AnoLancamento}</Text>
                  )}
               />
            )
         }
      </View>
   )
}

/*http://cfbcursos.com.br/filmes.json
{
   "titulo": "Lista de Filmes",
   "descricao": "Esta lista foi obtida do site cfbcursos",
   "filmes": [
     { "id": "1", "titulo": "Star Wars", "AnoLancamento": "1977" },
     { "id": "2", "titulo": "De Volta para o Futuro", "AnoLancamento": "1985" },
     { "id": "3", "titulo": "Matrix", "AnoLancamento": "1999" },
     { "id": "4", "titulo": "Esqueceram de mim", "AnoLancamento": "1990" },
     { "id": "5", "titulo": "Os Vingadores", "AnoLancamento": "2012" },
     { "id": "6", "titulo": "Armagedom", "AnoLancamento": "1998" },
     { "id": "7", "titulo": "Indiana Jones", "AnoLancamento": "1981" }
   ]
 }*/ 