#include <iostream>
#include <vector>

using namespace std;

int main (){

    vector<int> num1;
    vector<int> num2;
    int tam1,tam2,i;
                //num1

    num1.push_back(1); //Insere no final;
    num1.push_back(2);
    num1.push_back(3);
    num1.push_back(4);
    num1.push_back(5);

    num2.push_back(6);
    num2.push_back(7);
    num2.push_back(8);
    num2.push_back(9);
    num2.push_back(10);

    //begin() = Insere no inicio;
    //num1.insert(num1.begin()+2,888); //contando do começo para inserir

    //insert() = Insere na posição;
    //end() = Insere no final;
    num1.insert(num1.end()-1,888); //conta do final para inserir
    num1.erase(num1.end()-2);  //Aqui remove

    //num1.swap(num2); //Aqui troca os valores
    tam1=num1.size(); //Tamanho do Vector
    tam2=num2.size();

    cout << "Primeiro valor de num1: " << num1.front() << endl;
    cout << "Ultimo valor de num1..: " << num1.back() << endl;
    cout << "Valor do meio.........: " << num1.at(tam1/2) << endl;

    cout << "Tamanho do Vector: " << tam1 << endl;

    for(i=0;i<tam1;i++){
        cout << num1[i] << " ";
    }

    cout << endl;
     for(i=0;i<tam2;i++){
        cout << num2[i] << " ";
    }

    while(!num1.empty()){ //empty() = Verifica se esta vazio
        num1.pop_back(); // pop_back() = Remove do final;
    }
    //num2.clear(); //Limpa tudo
    cout << "\nNovo tamanho de num1: " << num1.size();

    return 0;
}
