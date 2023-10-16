#include <iostream>
#include <queue>

using namespace std;

int main (){

    queue <string> cartas;

	cartas.push("Rei de Copas");
	cartas.push("Rei de Espadas");
	cartas.push("Rei de Ouros");
	cartas.push("Rei de Paus");

    cout << "Tamanho da fila: " << cartas.size() << "\n";
    cout << "Primeira Carta.: " << cartas.front() << "\n";
    cout << "Ultima Carta...: " << cartas.back() << "\n\n";

    while(!cartas.empty()){
    cout << "Primeira Carta: " << cartas.front() << "\n";
    cartas.pop();
    }

	/*
	Empty = Vazio
	Size = Tamanho
	Front = Primeiro
	Back = Ultimo
	Push = Adiciona
	Pop = Remove
	*/

	return 0;

}
