#include <iostream>
#include <list>

using namespace std;

int main (){

	list<int> aula;
	int tam;
    list<int>::iterator it;

    aula.push_front(9);
    aula.push_front(0);
    aula.push_front(5);
    aula.push_front(3);
    aula.push_front(7);
    aula.push_front(2);
    aula.push_front(8);
    aula.push_front(1);
    aula.push_front(4);
    aula.push_front(6);

    /*tam=10;
    for(int i=0; i<tam; i++){  //Aqui fica em ordem
        aula.push_front(i);
        //aula.push_back(i);
    }*/

    /*it=aula.begin(); // Aqui é o comando pro inicio
    advance(it,7);     // Aqui insere onde você deseja

    aula.insert(it,0); // Aqui é o valor*/

    cout << "Tamanho da Lista: " << aula.size() << "\n\n";

    aula.sort();     //Ordena
    aula.reverse();  //Inverte

    tam=aula.size();
    for(int i=0; i<tam; i++){
        cout << aula.front() << "\n";
        aula.pop_front();
    }

	return 0;

}
