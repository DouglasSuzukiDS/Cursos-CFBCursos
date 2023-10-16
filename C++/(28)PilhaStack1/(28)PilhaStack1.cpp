#include <iostream>
#include <stack>

using namespace std;

int main (){

	stack <string> cartas;

	cartas.push("Rei de Copas");  // O primeiro a entrar, é o último a sair.
	cartas.push("Rei de Espadas"); // O ultimo a entrar, é o primeiro a sair.
	cartas.push("Rei de Ouros");
	cartas.push("Rei de Paus");

	cout << "Tamanho da pilha: " << cartas.size() << "\n"; //Size = Tamanho das Pilhas

    cout << "Carta do topo: " << cartas.top() << "\n"; // Primeiro elemento

    cartas.pop(); // Retira o elemento do topo
    cartas.pop();

    //cout << "Tamanho da pilha: " << cartas.size() << "\n";
    cout << "Nova carta do topo: " << cartas.top() << "\n";

	return 0;

}
