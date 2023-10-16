#include <iostream>
#include <stack> // Pilha - Lifo (Last-In-First-Out)

using namespace std;

int main (){
	//Primeiro Elemento a Entrar é o Último a sair
	//Push insere elementos
	//TOP mostra o primeiro da pilha
	//EMPLACE insere elemento no top


	stack<int>pilha1,pilha2;

	pilha2.push(10);
    pilha2.push(20);
    pilha2.push(30);
    pilha2.push(40);
    pilha2.push(50);
    pilha2.emplace(60);

    pilha2.swap(pilha1);

    cout << "Numero de elemento da pilha " << pilha1.size()<< endl;

    while(!pilha1.empty()){
        cout << pilha1.top() << endl;
        pilha1.pop();
    }

    if(pilha1.empty()){
        cout << "Pilha vazia" << endl;
    }else{
        cout << "Pilha contem elementos" << endl;
    }
    cout << "Numero de elemento da pilha " << pilha1.size()<< endl;

	return 0;

}
