#include <iostream>
#include <list>

using namespace std;

bool par(const int& value){
    return ((value%2)==0); //Aqui mostra os numeros pares
    //return ((value%2)==1); //Aqui retorna nos numeros impares
}

int main (){

    /*list<int>lst1;
    list<int>lst2(10,2);
    list<int>lst3(lst2);
    list<int>lst4={1,2,3,4};

    for(auto it=lst4.begin();it!=lst4.end();it++){
        cout << *it << "  ";
    }

    cout << endl;
    cout << "Tamanho: " << lst4.size() << endl;
    cout << "Capacidade maxima: " << lst4.max_size() << endl;
    cout << "Primeiro elemento:  " << lst4.front() << endl;
    cout << "Ultimo elemento: " << lst4.back() << endl;

    if(lst4.empty()){
        cout << "Lista vazia" << endl;
    }else{
        cout << "Lista nao esta vazia" << endl;}*/

    /*list<int>lst1{1,2,3,4};
    list<int>lst2;
    list<int>::iterator it;*/


    //lst2.assign(10,0); //Insere elementos
    //lst2.assign(lst1.begin(),lst1.end()); //Insere elementos de outra variavel
    //lst1.push_back(8); //Insere o elemento no final
    //lst1.pop_back(); //Remove o ultimo elemento
    //lst1.push_front(9);
    //lst1.pop_front(); //Remove o elemento no começo

    /*while(!lst1.empty()){   //While que remove todos os elementos
        lst1.pop_back(); } */

    //it=lst1.begin();
    /*++it; //Aqui insere na 2 posição
    ++it; //Aqui insere na 3 posição
    --it; //Aqui volta pra 2 posição*/

    //lst1.insert(it,8); //Aqui insere o elemento 8
    //lst1.erase(it); // Revome o 1 elemento
    //++it; //Remove o 2 elemento

    /*list<int>lst1={1,2,3,4,5};
    list<int>lst2={6,7,8,9,10};*/

    //lst1.swap(lst2); //Troca as variaveis
    //lst2.resize(3);  //Redimenciona
    //lst1.clear(); //Limpa as variaveis
    //lst2.clear();

    //lst1.emplace(/*++ ++*/lst1.begin(),9); //Os ++ significa a posição que sera inserida, sem remover
    //lst1.emplace_back(9); //Insere no final
    //lst1.emplace_front(9); //Insere no começo

    /*list<int>lst1={0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};

    //lst1.remove(0); //Remove todos os elementos selecionados
    lst1.remove_if(par);*/

    /*list<int>lst1={0,1,2,0,3,4,1,5,2,6,3,4,5,6};
    lst1.sort(); //Aqui ordena os elementos
    lst1.unique(); //Remove elementos duplicados*/

    list<int>lst1={0,1,2,3,4};
    list<int>lst2={5,6,7,8,9};

    lst1.merge(lst2); //Junta as variaveis
    lst1.reverse(); //Inverte a lista

    for(auto x:lst1){
        cout << x << "  ";
    }
    /*cout << endl;
    for(auto x:lst2){
        cout << x << "  ";}*/

	return 0;

}
