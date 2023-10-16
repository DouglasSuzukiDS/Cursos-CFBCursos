#include <iostream>
#include <cstdlib>

using namespace std;

void fim(){
    cout << "CFB Cursos" << endl;
}

int comparacao(const void* a, const void* b){
    return (*(int*)a - *(int*)b);
    //0 -> a = b;  //>0 -> a > b;  //<0 -> a < b;
}

int main (){

    /*atexit(fim); //Chama a função na saida do programa
    //at_quickexit(fim)

	for(int i=0;i<10;i++){
        if(i<5){
            cout << i << endl;
        }else{
            exit(EXIT_SUCCESS); //Para o programa no meio ...
            //quickexit_exit(EXIT_SUCESS);
            cout << i << endl;
        }
	}*/

    /*const char* canal="CFB Cursos";

    for(int i=0;i<10;i++){
        cout << i << endl;
    }

    _Exit(EXIT_SUCCESS); //C++ //Para o programa aqui aqui

    system("cls"); //Aqui apaga a tela
    system("dir"); //Diretorio do conteudo
    cout << canal << endl;
    system("pause"); //Pausa o sistema*/

    int vetor[]={9,1,8,2,7,3,6,4,5,0};

    int pesq=7;
    int *pos;

    qsort(vetor,10,sizeof(int),comparacao);  //Ordena os elementos

    for(int i=0;i<10;i++){
        cout << vetor[i] << endl;
    }

    pos=(int*)bsearch(&pesq,vetor,10,sizeof(int),comparacao);
    cout << "Elemento " << pesq << " esta na posicao " << *pos << endl;

	return 0;

}
