#include <iostream>

using namespace std;

void fibo (int cont=0);

int t1,t2,t3;

int main (){

    cout << "Calculo de Fibonacci. Inicio ";
    cin >> t1 ;
    cout << "Termo de " << t1 << " contado 10 vezes." << endl;

    fibo();

        return 0;
}

void fibo(int cont){
    t3 = t1 + t2;
        cout << t3 << ", ";
    t1 = t2;
    t2 = t3;
        if (cont <=10){
            fibo(++cont);}
            }





