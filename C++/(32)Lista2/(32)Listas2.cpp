#include <iostream>
#include <list>

using namespace std;

int main (){

	list<int> aula, teste;
	int tam;
    list<int>::iterator it;

    teste.push_front(9);
    teste.push_front(9);
    teste.push_front(9);
    teste.push_front(9);

    tam=10;
    for(int i=0; i<tam; i++){
        aula.push_front(i);
    }

    it=aula.begin(); //Inicio da lista;
    advance(it,3); //Avança para a posição;
    aula.insert(it,0); // Insere em algum ponto;
    aula.erase(--it); //Aqui remove o termo do insert

    //aula.clear(); //Aqui remove TODOS os elementos da lista
    aula.merge(teste); //Aqui mescla 2 listas

    cout << "Tamanho da Lista: " << aula.size() << "\n\n";

    tam=aula.size();
    for(int i=0; i<tam; i++){
        cout << aula.front() << "\n";
        aula.pop_front();
    }

    cout << "\nTamanho da Lista: " << aula.size() << "\n\n";

	return 0;

}
