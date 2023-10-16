#include <iostream>
#include <deque> //Fila Dupla
/*
Principais Diferenças:
    1) Implementam Iterator
    2) Pode ser acessado de ambos os Lados
        Podemos incluir ou retirar elementos tanto no inicio quanto no final
*/

using namespace std;

void linha(int tam,string txt);
void impd(deque<int>d);

int main (){

	deque<int>dq1;
	deque<int>dq2(10,5); //10 Numerais 5
	deque<int>dq3(dq2);
	deque<int>dq4={0,1,2,3,4,5,6,7,8,9};

	for(auto it=dq4.begin();it!=dq4.end();it++){
        cout << *it << " - ";
	}

	/*linha(50,"Capacidade"); //Funções de capacidade
	cout << "Tamanho atual: " << dq4.size()<< endl;
	cout << "Capacidade maxima: " << dq4.max_size() << endl;
	dq4.resize(15,10); // Altera o tamanho para 15 e preenche os novos espaços com o numeral 10
	cout << "Capacidade alterada: " << dq4.size() << endl;
	dq4.resize(20); //Altera o tamanho para 20 e preenche os novos espaços com o numeral 0
	cout << "Capacidade alterada novamente: " << dq4.size() <<endl;
	impd(dq4);*/


	/*linha(50,"Acesso");
	cout << "Terceiro elemento: " << dq4[2] << endl;
	cout << "Quarto elemento: " << dq4.at(3) << endl;
	cout << "Primeiro elemento: " << dq4.front() << endl;
	cout << "Ultimo elemento: " << dq4.back() << endl;*/

	linha(50,"Modficadores");
	//Atribui novos elementos substuindo os valores atuais por 10 numerais 0
	dq2.assign(10,0); //Substitui o elemento
	impd(dq2);
	cout << endl;

	dq2.assign(dq4.begin(),dq4.end());
	impd(dq2);
	cout << endl;

	dq2.push_back(99);
	impd(dq2);
	cout << endl;

	dq2.push_front(44);
	impd(dq2);
	cout << endl;

	dq2.pop_back();
	dq2.pop_front();
	impd(dq2);
	cout << endl;

	deque<int>::iterator it;
	it=dq2.begin()+5/*+N = A posição da inserção*/;
	dq2.insert(it,77);
	impd(dq2);
	cout << endl;

	it=dq2.begin();
	dq2.erase(it);   //Remove o Elemento
	it=dq2.end();
	dq2.erase(it);
	it=dq2.begin()+5;
	dq2.erase(it);
	impd(dq2);
	cout << endl;

	dq2.swap(dq4);
	dq4.clear();

	dq2.emplace(dq2.begin()+2,0); //Adiciona um novo elemento sem deletar o elemento da posição indicada
    dq2.emplace_front(44);
    dq2.emplace_back(33);
    impd(dq2);
	cout << endl;

	return 0;

}

void linha(int tam,string txt){
    cout << "\n\n-- " << txt << " ";
    for(int i=0;i<tam;i++){
        cout << "-";
    }
    cout << endl << endl;
}

void impd(deque<int>d){
    for(auto x:d){
        cout << x << "  ";
    }
}
