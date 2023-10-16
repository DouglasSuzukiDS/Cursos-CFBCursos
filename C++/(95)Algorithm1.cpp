#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

/*bool menor50(int i){
    return i<50;}*/

int main (){

	vector<int>vt={2,4,12,7,8,10,12,-8,1,3,5,6,7,11,13,2,7,2};

	for(auto x:vt){
        cout << x << "  ";
	}
    cout << "\n\n";

    /*
    //all_of = Retorna true se o test retornar true com todos os elementos da coleção
    if(all_of(vt.begin(),vt.end(),[](int i){return i<50;})){ //poderia usar função externa
        cout << "Todos sao menores que 50" << endl << endl;
    }else{
        cout << "Existe um ou mais elementos maiores que 50" << endl << endl;
    }

    //any_of = Retorna true se o teste retornar true pelo menos com um dos elementos
    if(any_of(vt.begin(),vt.end(),[](int i){return i>12;})){
        cout << "Existe um ou mais elementos maiores que 12" << endl << endl;
    }else{
        cout << "Todos sao menores ou iguais a 12" << endl << endl;
    }

    //none_of = Retorna false se o este retornar false pelo menos com um dos elementos
    if(none_of(vt.begin(),vt.end(),[](int i){return i<0;})){
        cout << "Todos sao positivos" << endl << endl;
    }else{
    cout << "Existe um negativo" << endl << endl;
    } */

    /*
    //for_each = Aplica uma funçãoa todos os elementos da coleção
    cout << "Dobro" << endl;
    for_each(vt.begin(),vt.end(),[](int i){cout << i*2 << "  ";});
    cout << "\n\n"; */

    /*
    //find = Procura um elemento e retorna um iterator com o resultado
    auto it=find(vt.begin(),vt.end(),12);
    cout << *it << endl << endl;  */

    /*
    //find_if = Procura um elemento que atenda a uma condição e retorna um itarator com o resultado
    auto it2=find_if(vt.begin(),vt.end(),[](int i){return ((i%2)==1);});
    cout << " Primeiro elemento impar: " << *it2 << endl << endl;  */

    /*
    //find_if_not = Procura um elemento que NÃO atenda a m determinada condição e retorna um iterator
    auto it3=find_if_not(vt.begin(),vt.end(),[](int i){return((i%2)==1);});
    cout << "Primeiro elemento par: " << *it3 << endl << endl;  */

    /*
    //count = Quantidade de um determiando elemento na coleção
    cout << "Quantidade de numeral 2: " << count(vt.begin(),vt.end(),2) << endl << endl;  */

    /*
    //count_if = Quantidade de um determinao elemento na coleção, que atenda a uma condição
    cout << "Quantidade de pares: " << count_if(vt.begin(),vt.end(),[](int i){return ((i%2)==0);}) << endl << endl;  */

	return 0;

}
