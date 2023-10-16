#include <iostream>

using namespace std;
void Fibo(int cont=0);
int N1, N2, N3, Informado=1, Fatoral=1;
char Res, S, s;

int main (){

    inicio:
    cout << " Digite um numero para ser fatorado com " << "a sequencia Fibonacci de 10 numeros:\n";
    cin >> N1;

       while(Informado <= N1){
        Fatoral=Fatoral*Informado;
        Informado=++Informado;}

    cout << "\n O fatorial de " << N1 << " e: " << Fatoral << "\n";
    cout << "\n E a sequencia Fibonacci e: " << "\n" << N3;

    Fibo();

    cout << "\n\n Deseja fazer uma nova pesquisa?(S/N)\n";
    cin >> Res;
        if( Res == 'S' or Res == 's'){
            goto inicio;}

    return 0;
    }
void Fibo(int cont){
         N3 = N1+N2;
            cout << N3 << "  ";
         N1 = N2;
         N2 = N3;
            if(cont<=10){
                Fibo(++cont);}
}
