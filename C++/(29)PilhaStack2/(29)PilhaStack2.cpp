#include <iostream>
#include <stack>

using namespace std;

int main (){
        /*
        Push() = Adiciona o elemento;
        Pop() = Retira do top;
        Top() = Mostra o elemento do Topo;
        Size() = Tamanho da Stack;
        Empty() = Verifica se a Stack está vazia, retorna TRUE ou FALSE */


	stack <string> cartas;

    /*if(cartas.empty()){
        cout << "Pilha vazia\n\n";
    }else{
        cout << "Pilha com cartas\n\n";
    }*/   // aqui a pilha acusara vazia.

	cartas.push("Rei de Copas");  // O primeiro a entrar, é o último a sair.
	cartas.push("Rei de Espadas"); // O ultimo a entrar, é o primeiro a sair.
	cartas.push("Rei de Ouros");
	cartas.push("Rei de Paus");

	if(cartas.empty()){
        cout << "Pilha vazia\n\n";
    }else{
        cout << "Pilha com cartas\n\n";
    } //Aqui mostra Pilha com Cartas, pois esta abaixo dos argumentos

    /*if(cartas.size() == 0){
        cout << "Pilha vazia\n\n";
    }else{
        cout << "Pilha com cartas\n\n";
    }*/ // Aqui diz que se a Pilha esta vazia.

    while(!cartas.empty()){
        cartas.pop(); //Aqui elimina todo conteudo da pilha
    }


	cout << "Tamanho da pilha: " << cartas.size() << "\n"; //Size = Tamanho das Pilhas

    cout << "Carta do topo: " << cartas.top() << "\n"; // Primeiro elemento

    cartas.pop(); // Retira o elemento
    cartas.pop();

    cout << "Nova carta do topo: " << cartas.top() << "\n";

	return 0;

}
